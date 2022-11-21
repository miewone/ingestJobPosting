import os

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import re
from selenium.common.exceptions import ElementClickInterceptedException, StaleElementReferenceException, \
    NoSuchElementException

import time
from queue import Queue





def check_click(page):
    try:
        page.click()
    except ElementClickInterceptedException:
        return False
    return True

def check_title(page):
    try:
        page.find_element(By.CLASS_NAME,"jobs_title")
    except StaleElementReferenceException:
        return False
    return True

def check_skills(drivers,selector):
    try:
        drivers.find_element(By.CSS_SELECTOR,selector)
    except NoSuchElementException:
        return False
    return True

words = Queue()
words.put("java")

dirs = os.listdir("./jobplanet")
existfiles= []
searchedWord = []
searchedJob =[]
searchedCom = []
finedWord = ""
with open("skills.txt","r",encoding="UTF-8") as file:
    finedWord = file.read()

if len(dirs) != 0:
    dirs = [data[0:len(data) - data[::-1].index(".") - 1] for data in dirs]
    for data in dirs:
        searchedJob.append(data[0:len(data) - data[::-1].index("_") - 1])
    searchedCom = [data.split("_")[-1] for data in dirs]

pageCount = 1
searchedFlag = False
chrome_options = Options()
chrome_options.add_argument('--profile-directory=Default')
chrome_options.add_argument("--incognito")
chrome_options.add_argument("--disable-plugins-discovery")
driver = webdriver.Chrome(options=chrome_options)
searchCnt = 0
while not words.empty():
    print("> 현재 큐 상태 : {}".format(words.queue))
    print("> 현재 큐 길이 : {}".format(words.qsize()))
    word = words.get()
    print("> 검색 중 단어 : {}".format(word))
    if word in searchedWord:
        continue
    searchedWord.append(word)

    url = "https://www.jobplanet.co.kr/job/search?q={}".format(word)
    driver.get(url)
    time.sleep(3)
    childNodeCount = int(driver.execute_script("return document.querySelector(\"#job_search_app > div > div.job_search_content > section > div.job_search_list > div.jply_pagination_ty1\").childElementCount"))
    if childNodeCount == 0:
      maxPage = 2
    elif childNodeCount <5:
        maxPage = int(driver.find_element(By.CSS_SELECTOR,"#job_search_app > div > div.job_search_content > section > div.job_search_list > div.jply_pagination_ty1 > button:Last-Child").text)
    elif childNodeCount == 5:
        maxPage = int(driver.find_element(By.CSS_SELECTOR,"#job_search_app > div > div.job_search_content > section > div.job_search_list > div.jply_pagination_ty1 > button:nth-child(4)").text)
    else:
        maxPage = int(driver.find_element(By.CSS_SELECTOR,"#job_search_app > div > div.job_search_content > section > div.job_search_list > div.jply_pagination_ty1 > button:nth-child(5)").text)

    for _ in range(1,maxPage):
        pages = driver.find_elements(By.CLASS_NAME,"desc_card_list_unit")
        for page in pages:
            searchCnt += 1
            title = page.find_element(By.CLASS_NAME, "jobs_title").text
            company = page.find_element(By.CLASS_NAME,"jobs_company").text
            company = re.sub('[0-9.]',"",company)
            if title in searchedJob and company in searchedCom:
                continue

            if not check_click(page):
                time.sleep(5)
                page.click()
            else:
                time.sleep(1)
                searchedJob.append(title)
                searchedCom.append(company)
            post_link = driver.current_url
            isSkill = check_skills(driver,"#job_search_app > div > div.job_search_content > section > div.job_search_detail > div > div > div > div.job_wrap_new.company_job_details > div > div.wrap > div > div > div.block_job_posting > section > div.recruitment-detail__box.recruitment-summary > dl > dd:nth-child(12)")
            if isSkill:
                skills = driver.find_element(By.CSS_SELECTOR,"#job_search_app > div > div.job_search_content > section > div.job_search_detail > div > div > div > div.job_wrap_new.company_job_details > div > div.wrap > div > div > div.block_job_posting > section > div.recruitment-detail__box.recruitment-summary > dl > dd:nth-child(12)")
            title = re.sub('[\\/:*?"<>\|]',"_",title)
            with open('./jobplanet/{}_{}.html'.format(title,company),"w",encoding="UTF-8") as file:
                dd = driver.find_element(By.CSS_SELECTOR,
                                         "#job_search_app > div > div.job_search_content > section > div.job_search_detail > div > div > div > div.job_wrap_new.company_job_details > div > div.wrap > div > div > div.block_job_posting > section")\
                                        .get_attribute('innerHTML')
                url_innerHTML="<div class='post_link'>{}</div>".format(post_link)
                dd+=url_innerHTML
                file.write(dd)
            if isSkill:
                with open('skills.txt', "a", encoding="UTF-8") as file:
                    for appendata in [data for data in skills.text.split(",")]:
                        text = appendata.replace(" ", "")
                        if searchCnt > 50 :
                            searchedFlag = True
                        if text in finedWord and searchedFlag:
                            continue
                        file.write(text.replace(" ","") + "\n")
                        words.put(text)
        if maxPage != 2 and driver.execute_script('return document.querySelector("#job_search_app > div > div.job_search_content > section > div.job_search_list > div.jply_pagination_ty1 > button.active").nextElementSibling != null'):
            driver.execute_script('document.querySelector(".jply_pagination_ty1 button.active").nextElementSibling.click();')
        time.sleep(2.5)