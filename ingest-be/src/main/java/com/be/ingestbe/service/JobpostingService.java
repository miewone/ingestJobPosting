package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.repository.JobPostingSkillsMapperRepository;
import com.be.ingestbe.repository.JobpostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class JobpostingService {

    private final JobpostingRepository jobpostingRepository;
    private final JobPostingSkillsMapperRepository jobPostingSkillsMapperRepository;


    public List<Jobposting> Jobpostings(){
        return jobpostingRepository.findAll();
    }


    public List<String> getJobpostingAllSkills(){
        return jobPostingSkillsMapperRepository.findAllBy().stream().map(obj -> obj.getSkills().split(",")).flatMap(Arrays::stream).collect(Collectors.toList());
    }
    public Map<String,Long> searchJobpostingBySkill(String skill){
        return jobPostingSkillsMapperRepository
                .findAllBySkillsContaining(skill)
                .stream()
                .map(obj -> counterLocations(obj.getLocation()))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    public Map<String,Long> allPostingCounterLocation(){
        return jobPostingSkillsMapperRepository
                .findAllBy()
                .stream()
                .map(obj -> counterLocations(obj.getLocation()))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }
    private String counterLocations(String str) {
        List<String> location = List.of("충청북도", "인천", "강원", "서울", "경기", "전라북도", "광주", "충청남도", "대전", "대구", "경상남도", "전라남도", "부산", "울산", "경상북도", "제주도", "세종");
        AtomicReference<String> selectLocation = new AtomicReference<>("");
        List<String> t = location.stream().map(value -> {
            if(str.contains(value)){
                selectLocation.set(value);
            }
            return "";
        }).toList();
        return selectLocation.get();
    }
}
