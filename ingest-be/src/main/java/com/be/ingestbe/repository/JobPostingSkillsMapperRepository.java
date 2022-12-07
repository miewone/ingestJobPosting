package com.be.ingestbe.repository;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.mapper.JobPostingSkillsMapper;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface JobPostingSkillsMapperRepository extends JpaRepository<Jobposting,String> {
    List<JobPostingSkillsMapper> findAllBy();
    Optional<List<JobPostingSkillsMapper>> findAllBySkillsContaining(String keyword);

    List<JobPostingSkillsMapper> findAllBySkillsContainingAndLocationContaining(String skill, String location);

}
