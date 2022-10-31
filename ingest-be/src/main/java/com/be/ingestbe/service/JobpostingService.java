package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.dto.JobpostingDto;
import com.be.ingestbe.mapper.JobPostingSkillsMapping;
import com.be.ingestbe.repository.JobPostingSkillsMapperRespotiroy;
import com.be.ingestbe.repository.JobpostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
        List<HashMap<String,Integer>> locationCount = List.of();
//        Map<String,Long> location_Counter =
//        Map<String,Long> locations = jobPostingSkillsMapperRespotiroy.findAllBySkillsContaining(skill).stream().map(obj -> obj.getLocation().split(" ")[0]).collect(Collectors.groupingBy(String::toString,Collectors.counting()));
        List<String> locations = jobPostingSkillsMapperRespotiroy
                                    .findAllBySkillsContaining(skill)
                                    .stream()
                                    .map(obj -> counterLocations(obj.getLocation()))
                                    .toList();

        return null;
    }

    private String counterLocations(String str) {
        List<String> location = List.of("충청북도", "인천", "강원", "서울", "경기", "전라북도", "광주", "충청남도", "대전", "대구", "경상남도", "전라남도", "부산", "울산", "경상북도", "제주도", "세종");
//        HashMap<String,Long> countermap = location.stream().map(value -> new HashMap<String,Long>(){{put(value,0L);}}).
//        return location.stream().map(value -> {
//            if(value.contains(str)){
//                countermap[value]
//            }
//            return null;
//        }).collect(Collectors.toList());
        return null;
    }
}
