package com.be.ingestbe.dto;

import lombok.Builder;

import java.io.Serializable;

@Builder
public record JobPostingDto(
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

    public static JobPostingDto of(
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
        return new JobPostingDto(
                job, career, employment_pattern, pay, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location, company
        );
    }

    public static JobPostingDto of(String skills, String location){
        return new JobPostingDto(null,null,null,null, skills,null,null,null,null,null, null, location, null);
    }


}
