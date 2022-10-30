package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.dto.JobpostingDto;
import com.be.ingestbe.mapper.JobPostingSkillsMapping;
import com.be.ingestbe.repository.JobPostingSkillsMapperRespotiroy;
import com.be.ingestbe.repository.JobpostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class JobpostingService {

    private final JobpostingRepository jobpostingRepository;
    private final JobPostingSkillsMapperRespotiroy jobPostingSkillsMapperRespotiroy;


    public List<Jobposting> Jobpostings(){
        return jobpostingRepository.findAll();
    }


    public List<String> getJobpostingAllSkills(){
        return jobPostingSkillsMapperRespotiroy.findAllBy().stream().map(obj -> obj.getSkills().split(",")).flatMap(Arrays::stream).collect(Collectors.toList());
    }

    public List<String> searchJobpostingBySkill(String skill){
        return jobPostingSkillsMapperRespotiroy.findAllBySkillsContaining(skill).stream().map(obj -> obj.getLocation().split(" ")[0]).collect(Collectors.toList());
    }
}
