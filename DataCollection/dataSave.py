import os
import json
from bs4 import BeautifulSoup
import re
import pymysql
from yaml import parse
from config import (DB_URL,DB_USERID,DB_PASSWORD)

def findText_summay(pages, word):
    text = pages.find(string=word)
    text = text.find_parent("dt")
    text = text.find_next("dd").text
    return text
def findText_content(pages, word):
    try:
        text = pages.find(string=word)
        text = text.find_next("p").text
        return text
    except:
        return ""


with pymysql.connect(host=DB_URL, user=DB_USERID, password=DB_PASSWORD, db='jobinfo', charset="utf8") as conn:
    cursor = conn.cursor()
    print(os.path)
    files = os.listdir("/home/wgpark/jobinfo/DataCollection/postingData")
    cnt = 0
    for post in files:
        cnt += 1
        with open("/home/wgpark/jobinfo/DataCollection/postingData/{}".format(post), 'r', encoding="UTF-8") as job:
            print(post + "\t\t" + str(cnt))
            category = ""
            page = job.read()
            parsePage = BeautifulSoup(page, 'html.parser')
            company = re.split('[_.]',post)[-2]
            job = findText_summay(parsePage,"직무")
            career = findText_summay(parsePage,"경력")
            employment_pattern = findText_summay(parsePage,"고용형태")
            skills = findText_summay(parsePage,"스킬").replace(" ","").lower()
            # skills = json.dumps({'{}'.format(i) : skill[i] for i in range(len(skill))},ensure_ascii=False)
            company_introduction = findText_content(parsePage,"기업 소개").replace("\n"," ")
            major_task = findText_content(parsePage,"주요 업무").replace("\n"," ")
            certified = findText_content(parsePage,"자격 요건").replace("\n"," ")
            preferential = findText_content(parsePage,"우대사항").replace("\n"," ")
            hiring_process = findText_content(parsePage,"채용 절차").replace("\n"," ")
            benefits = findText_content(parsePage,"복리후생").replace("\n"," ")
            location = findText_content(parsePage,"회사위치").replace("\n"," ")

            # 카테고리 찾기
            # overlapCategoryCnt = 0
            # if "디자인" in job:
            #     category = "디자인"

            # if
            # employmentType
            # employmentType = findText(parsePage, "고용형태")
            # # skill
            # skill = findText(parsePage, "스킬")

            # pt = parsePage.select_one("div:nth-child(5) > p").text
            # pt = parsePage.find("h3", string="우대사항")
            # pts = []
            # if pt != None:
            #     pt = pt.find_next("p").text
            #     pt = re.sub("[ \-•]{2,8}", "", pt, flags=re.S)
            #     pts = pt.split("\n") if "\n" in pt else None

            # location = parsePage.select_one("div:nth-last-child(2) > p").text
            # location = parsePage.find("h3", string="회사위치")
            # location = location.find_next("p").text

            # location = parsePage.select_one("div:nth-child(8) > p").text
            # jobs = []
            # skills = []
            # employmentTypes = []

            # jobs = job.split(",") if "," in job else job
            # skills = [data.replace(" ", "") if " " in data else data for data in
            #           skill.split(",")] if "," in skill else skill
            # employmentTypes = employmentType.split(",") if "," in employmentType else employmentType
            insetJobPosingSql = """
                insert into jobposting (company,job, career, employment_pattern, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location) 
                values (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
                """
            cursor.execute(insetJobPosingSql, (company,job, career, employment_pattern, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location))
            
            # insetSkillSql = '''
            #     insert into skills (skill)
            #         select %s from dual
            #             where not EXISTS
            #                 (
            #                     select skill from skills where skill like %s
            #                 )
            #                 '''
            insertSkillSql = "insert into skills (skill) values (%s)"

            # if skills and type(skills) == type(list()):
            #     for i in skills:
            #         cursor.execute(insertSkillSql, (job, career, employment_pattern, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location))
            # else:
            #     cursor.execute(insertSkillSql, (skills))

            conn.commit();
