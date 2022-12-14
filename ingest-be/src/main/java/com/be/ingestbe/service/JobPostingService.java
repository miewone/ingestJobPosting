package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
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
import org.springframework.data.domain.PageImpl;
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
                .filter(obj -> obj.getAddressCity() != null)
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
                .filter(post -> checkSkillInSkills(post.getSkills(),lowerCase) && post.getAddressCity() != null)
                .map(obj -> counterLocations(obj.getAddressCity(),true))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    public Map<String,Long> allPostingCounterLocation(){
        return jobPostingSkillsMapperRepository
                .findAllBy()
                .stream()
                .filter(obj -> obj.getAddressCity() != null)
                .map(obj -> counterLocations(obj.getAddressCity(),true))
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    public Map<String,Long> getSelectedLocationAndSkills(JobPostingDto body){
        String lowerCase = body.skills().toLowerCase(Locale.ROOT);
        List<JobPostingSkillsMapper> skillAndLocationSearching = jobPostingSkillsMapperRepository
                .findAllBySkillsContainingAndLocationContaining(lowerCase,body.location());
        return skillAndLocationSearching
                .stream()
                .filter(post -> checkSkillInSkills(post.getSkills(),lowerCase) && post.getAddressGu() != null)
                .map(obj -> obj.getAddressGu())
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

    @Transactional(readOnly = true)
    public Page<JobPostingDto> searchSemiJobPostings(SearchSemiPostingDto body, Pageable pageable) {
        String lowerCase = body.skill().toLowerCase(Locale.ROOT);
        List<JobPostingDto> content = jobpostingRepository.findAllBySkillsContainingAndAddressCityContaining(body.skill(), body.location())
                .stream()
                .filter(post -> checkSkillInSkills(post.getSkills(),lowerCase) && post.getAddressCity() != null)
                .map(JobPostingDto::from).toList();
        int start = (int) pageable.getOffset();
        int end = Math.min(start+ pageable.getPageSize(),content.size());
        Page<JobPostingDto> test = new PageImpl<>(content.subList(start,end),pageable, content.size());
        return test;
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
    // True ??? ???????????? ???,??? ?????? ???????????????.
    // False ??? ???????????? ???, ??? ?????? ???????????????.
    private String counterLocations(String str,Boolean semiValue) {
        List<String> location = List.of("????????????", "??????", "??????", "??????", "??????", "????????????", "??????", "????????????", "??????", "??????", "????????????", "????????????", "??????", "??????", "????????????", "?????????", "??????");
        for(String value : location){
            if(str.contains(value) && semiValue){
                return value;
            }
            else if(str.contains(value) && !semiValue){
                return str;
            }
        }
        return "??????";
    }


}
