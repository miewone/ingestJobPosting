import os
import json
from bs4 import BeautifulSoup
import re
import pymysql


def findText(pages, word):
    text = pages.find(string=word)
    text = text.find_parent("dt")
    text = text.find_next("dd").text
    return text


with pymysql.connect(host="wongyun-d-jobinfo.cqpgjoevtrma.ap-northeast-2.rds.amazonaws.com", user="admin", password="tlqkfdk156", db='jobinfo', charset="utf8") as conn:
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

            job = findText(parsePage, "직무")

            # 카테고리 찾기
            overlapCategoryCnt = 0
            if "디자인" in job:
                category = "디자인"

            # if
            # employmentType
            employmentType = findText(parsePage, "고용형태")
            # skill
            skill = findText(parsePage, "스킬")

            # pt = parsePage.select_one("div:nth-child(5) > p").text
            pt = parsePage.find("h3", string="우대사항")
            pts = []
            if pt != None:
                pt = pt.find_next("p").text
                pt = re.sub("[ \-•]{2,8}", "", pt, flags=re.S)
                pts = pt.split("\n") if "\n" in pt else None

            # location = parsePage.select_one("div:nth-last-child(2) > p").text
            location = parsePage.find("h3", string="회사위치")
            location = location.find_next("p").text

            # location = parsePage.select_one("div:nth-child(8) > p").text
            jobs = []
            skills = []
            employmentTypes = []

            jobs = job.split(",") if "," in job else job
            skills = [data.replace(" ", "") if " " in data else data for data in
                      skill.split(",")] if "," in skill else skill
            employmentTypes = employmentType.split(",") if "," in employmentType else employmentType

            insetJobsql = "insert into jobs (job,skill) values (%s,%s)"
            # insetSkillSql = '''
            #     insert into skills (skill)
            #         select %s from dual
            #             where not EXISTS
            #                 (
            #                     select skill from skills where skill like %s
            #                 )
            #                 '''
            insertSkillSql = "insert into skills (skill) values (%s)"

            if skills and type(skills) == type(list()):
                for i in skills:
                    cursor.execute(insertSkillSql, (i))
            else:
                cursor.execute(insertSkillSql, (skill))

            conn.commit();
