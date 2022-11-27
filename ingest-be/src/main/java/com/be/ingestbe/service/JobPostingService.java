package com.be.ingestbe.service;

import com.be.ingestbe.dto.JobPostingDto;
import com.be.ingestbe.dto.SearchSemiPostingDto;
import com.be.ingestbe.enums.CodeEnum;
import com.be.ingestbe.exception.CustomException;
import com.be.ingestbe.feign.client.IngestFeignClient;
import com.be.ingestbe.mapper.JobPostingSkillsMapper;
import com.be.ingestbe.repository.JobPostingSkillsMapperRepository;
import com.be.ingestbe.repository.JobPostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class JobPostingService {

    private final JobPostingRepository jobpostingRepository;
    private final JobPostingSkillsMapperRepository jobPostingSkillsMapperRepository;

    private final IngestFeignClient ingestFeignClient;

    public List<JobPostingDto> Jobpostings(){
        return jobpostingRepository
                .findAll()
                .stream()
                .map(JobPostingDto::from)
                .toList();
    }


    public List<String> getJobpostingAllSkills(){
        return jobPostingSkillsMapperRepository
                .findAllBy()
                .stream()
                .map(obj -> obj.getSkills().split(","))
                .flatMap(Arrays::stream)
                .collect(Collectors.toList());
    }
    public Map<String,Long> searchJobpostingBySkill(String skill) throws Exception {
        String lowerCase = skill.toLowerCase(Locale.ROOT);
        Optional<List<JobPostingSkillsMapper>> searchSkills = jobPostingSkillsMapperRepository.findAllBySkillsContaining(lowerCase);
        
        return searchSkills
                .orElseThrow(() -> new CustomException(CodeEnum.PARAMETER_ERROR))
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

    public Map<String,Long> getSelectedLocationAndSkills(JobPostingDto body){
        String lowerCase = body.skills().toLowerCase(Locale.ROOT);
        Optional<List<JobPostingSkillsMapper>> skillAndLocationSearching = jobPostingSkillsMapperRepository
                .findAllBySkillsContainingAndLocationContaining(lowerCase,body.location());
        return skillAndLocationSearching
                .orElseThrow(() -> new CustomException(CodeEnum.PARAMETER_ERROR))
                .stream()
                .filter(post -> checkSkillInSkills(post.getSkills(),lowerCase))
                .map(obj -> counterLocations(obj.getLocation(),false))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    @Transactional(readOnly = true)
    public Page<JobPostingDto> searchSemiJobPostings(SearchSemiPostingDto body, Pageable pageable) {
        Page<JobPostingDto> rr = jobpostingRepository.findAllBySkillsContainingAndLocationContaining(body.skill(), body.location(), pageable).map(JobPostingDto::from);
        return jobpostingRepository.findAllBySkillsContainingAndLocationContaining(body.skill(), body.location(), pageable).map(JobPostingDto::from);
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
