package com.be.ingestbe.contoller;

import com.be.ingestbe.domain.Jobposting;

import com.be.ingestbe.dto.JobpostingDto;
import com.be.ingestbe.service.JobpostingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/jobinfo")
@RestController
@RequiredArgsConstructor
public class JobpostingController {

    private final JobpostingService jobpostingService;


    @GetMapping("/all")
    public List<Jobposting> jobPostings(){
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
    public Map<String,Long> getLocationByGuAndSkill(@RequestBody JobpostingDto body){
        return jobpostingService.getSelectedLocationAndSkills(body);
    }

    @GetMapping("/locations/{skill}")
    public Map<String,Long> jobPostingSearchBySkill(@PathVariable String skill){
        return jobpostingService.searchJobpostingBySkill(skill);
    }
}
