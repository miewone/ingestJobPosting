package com.be.ingestbe.dto;

import com.be.ingestbe.domain.Jobposting;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;

import java.io.Serializable;

@JsonInclude(JsonInclude.Include.NON_NULL)
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
        String company,
        String url,
        String title,
        String addressGu,
        String addressCity,
        String addressDong
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
                         String company,
                         String url,
                         String title,
                         String addressGu,
                         String addressCity,
                         String addressDong

    ) {
        return new JobPostingDto(
                job, career, employment_pattern, pay, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location, company, url, title,addressGu,addressCity,addressDong
        );
    }

    public static JobPostingDto of(String skills, String location){
        return new JobPostingDto(null,null,null,null, skills,null,null,null,null,null, null, location, null,null ,null,null,null,null);
    }

    public static JobPostingDto from(Jobposting entity) {
        return new JobPostingDto(
                entity.getJob(),
                entity.getCareer(),
                entity.getEmployment_pattern(),
                entity.getPay(),
                entity.getSkills(),
                entity.getCompany_introduction(),
                entity.getMajor_task(),
                entity.getCertified(),
                entity.getPreferential(),
                entity.getHiring_process(),
                entity.getBenefits(),
                entity.getLocation(),
                entity.getCompany(),
                entity.getUrl(),
                entity.getTitle(),
                entity.getAddressGu(),
                entity.getAddressCity(),
                entity.getAddressDong()
        );
    }
}
