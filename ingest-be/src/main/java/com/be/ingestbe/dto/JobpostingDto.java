package com.be.ingestbe.dto;

import java.io.Serializable;

public record JobpostingDto(
        String job,
        String career,
        String employment_pattern,
        String pay,
        String skills,
        String company_introduction,
        String major_task,
        String certified,
        String preferential,
        String hiring_process,
        String benefits,
        String location,
        String company
) implements Serializable {

    public static JobpostingDto of(
                         String job,
                         String career,
                         String employment_pattern,
                         String pay,
                         String skills,
                         String company_introduction,
                         String major_task,
                         String certified,
                         String preferential,
                         String hiring_process,
                         String benefits,
                         String location,
                         String company) {
        return new JobpostingDto(
                job, career, employment_pattern, pay, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location, company
        );
    }

    public static  JobpostingDto of(String skills,String location){
        return new JobpostingDto(null,null,null,null, skills,null,null,null,null,null, null, location, null);
    }


}
