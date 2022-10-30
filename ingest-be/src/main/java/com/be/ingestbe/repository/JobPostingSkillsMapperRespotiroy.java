package com.be.ingestbe.repository;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.mapper.JobPostingSkillsMapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobPostingSkillsMapperRespotiroy extends JpaRepository<Jobposting,String> {
    List<JobPostingSkillsMapping> findAllBy();
    List<JobPostingSkillsMapping> findAllBySkillsContaining(String keyword);

}
