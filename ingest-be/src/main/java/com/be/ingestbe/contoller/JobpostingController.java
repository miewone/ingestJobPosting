package com.be.ingestbe.contoller;

import com.be.ingestbe.domain.Jobposting;

import com.be.ingestbe.dto.JobPostingDto;
import com.be.ingestbe.service.JobpostingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/jobinfo")
@RestController
@RequiredArgsConstructor
public class JobpostingController {

    private final JobpostingService jobpostingService;


    @GetMapping("/all")
    public List<JobPostingDto> jobPostings(){
        return jobpostingService.Jobpostings();
    }

    @GetMapping("/skills")
    public List<String> get_Jobposting_skills(){
        return jobpostingService.getJobpostingAllSkills();
    }


    @GetMapping("/exposebylocation")
    public Map<String,Long> jobPostingAllLocations(){
        return jobpostingService.allPostingCounterLocation();
    }

    @PostMapping("/semilocation")
    public Map<String,Long> getLocationByGuAndSkill(@RequestBody JobPostingDto body){
        return jobpostingService.getSelectedLocationAndSkills(body);
    }

    @GetMapping("/locations/{skill}")
    public Map<String,Long> jobPostingSearchBySkill(@PathVariable String skill) throws Exception {
        return jobpostingService.searchJobpostingBySkill(skill);
    }


}
