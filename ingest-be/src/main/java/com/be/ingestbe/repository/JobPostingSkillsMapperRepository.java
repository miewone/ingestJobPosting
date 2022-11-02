package com.be.ingestbe.repository;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.mapper.JobPostingSkillsMapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobPostingSkillsMapperRepository extends JpaRepository<Jobposting,String> {
    List<JobPostingSkillsMapper> findAllBy();
    List<JobPostingSkillsMapper> findAllBySkillsContaining(String keyword);

}
