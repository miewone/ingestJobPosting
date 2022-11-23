package com.be.ingestbe.domain;

import lombok.Getter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Objects;

@Getter
@ToString
@Entity
public class Jobposting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 20)
    private String job;
    @Column(length = 20)
    private String career;
    @Column(length = 20)
    private String employment_pattern;
    @Column(length = 20)
    @ColumnDefault("0")
    private String pay;
    @Column(columnDefinition = "TEXT")
    private String skills;
    @Column(columnDefinition = "TEXT")
    private String company_introduction;
    @Column(columnDefinition = "TEXT")
    private String major_task;
    @Column(columnDefinition = "TEXT")
    private String certified;
    @Column(columnDefinition = "TEXT")
    private String preferential;
    @Column(columnDefinition = "TEXT")
    private String hiring_process;
    @Column(columnDefinition = "TEXT")
    private String benefits;
    @Column(columnDefinition = "TEXT")
    private String location;
    @Column(length = 30)
    private String company;

    @Column(length = 300)
    private String url;

    @Column(length = 50)
    private String title;

    protected Jobposting(){}

    private Jobposting(String job,
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
                    String title
                       ){
        this.job = job;
        this.career = career;
        this.employment_pattern = employment_pattern;
        this.pay = pay;
        this.skills = skills;
        this.company_introduction = company_introduction;
        this.major_task = major_task;
        this.certified = certified;
        this.preferential = preferential;
        this.hiring_process = hiring_process;
        this.benefits = benefits;
        this.location = location;
        this.company = company;
        this.title= title;
        this.url = url;
    }

    public static Jobposting of(String job,
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
                             String title) {
        return new Jobposting(job, career, employment_pattern,pay, skills, company_introduction, major_task, certified, preferential, hiring_process, benefits, location, company,url,title);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof Jobposting Jobposting)) return false;
        return id != null && id.equals(Jobposting.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
