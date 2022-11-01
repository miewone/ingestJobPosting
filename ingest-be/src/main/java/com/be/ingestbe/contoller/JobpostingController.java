package com.be.ingestbe.contoller;

import com.be.ingestbe.domain.Jobposting;

import com.be.ingestbe.service.JobpostingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RequestMapping("/jobinfo")
@RestController
@RequiredArgsConstructor
public class JobpostingController {

    private final JobpostingService JobpostingService;


    @GetMapping("/all")
    public List<Jobposting> jobPostings(){
        return JobpostingService.Jobpostings();
    }

    @GetMapping("/skills")
    public List<String> get_Jobposting_skills(){
        return JobpostingService.getJobpostingAllSkills();
    }


    @GetMapping("/exposebylocation")
    public Map<String,Long> jobPostingAllLocations(){
        return JobpostingService.allPostingCounterLocation();
    }
    @GetMapping("/locations/{skill}")
    public Map<String,Long> jobPostingSearchBySkill(@PathVariable String skill){
        return JobpostingService.searchJobpostingBySkill(skill);
    }
}
