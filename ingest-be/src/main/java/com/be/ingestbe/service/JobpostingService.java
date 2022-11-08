package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.dto.JobpostingDto;
import com.be.ingestbe.mapper.JobPostingSkillsMapper;
import com.be.ingestbe.repository.JobPostingSkillsMapperRepository;
import com.be.ingestbe.repository.JobpostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
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
        String lowerCase = skill.toLowerCase(Locale.ROOT);
        return jobPostingSkillsMapperRepository
                .findAllBySkillsContaining(lowerCase)
                .stream()
                .filter(post -> checkSkillInSkills(post.getSkills(),lowerCase))
                .map(obj -> counterLocations(obj.getLocation(),true))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    public Map<String,Long> allPostingCounterLocation(){
        return jobPostingSkillsMapperRepository
                .findAllBy()
                .stream()
                .map(obj -> counterLocations(obj.getLocation(),true))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    public Map<String,Long> getSelectedLocationAndSkills(JobpostingDto body){
        String lowerCase = body.skills().toLowerCase(Locale.ROOT);
        return jobPostingSkillsMapperRepository
                .findAllBySkillsContainingAndLocationContaining(lowerCase,body.location())
                .stream()
                .filter(post -> checkSkillInSkills(post.getSkills(),lowerCase))
                .map(obj -> counterLocations(obj.getLocation(),false))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }
    private Boolean checkSkillInSkills(String skill,String targetSkill){
        if(targetSkill==null || targetSkill.equals("")) return true;
        String[] posSkills = skill.split(",");
        for(String postSkill : posSkills) {
            if(postSkill.equals(targetSkill)){
                return true;
            }
        }
        return false;
    }

    // Parameter: semiValue
    // True 일 경우에는 시,도 값을 가져옵니다.
    // False 일 경우에는 구, 시 값을 가져옵니다.
    private String counterLocations(String str,Boolean semiValue) {
        List<String> location = List.of("충청북도", "인천", "강원", "서울", "경기", "전라북도", "광주", "충청남도", "대전", "대구", "경상남도", "전라남도", "부산", "울산", "경상북도", "제주도", "세종");
        for(String value : location){
            if(str.contains(value) && semiValue){
                return value;
            }
            else if(str.contains(value) && !semiValue){
                return str.split(" ")[1];
            }
        }
        return "기타";
    }


}
