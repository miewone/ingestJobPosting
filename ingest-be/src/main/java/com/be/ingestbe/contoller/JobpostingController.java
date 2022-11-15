package com.be.ingestbe.contoller;

import com.be.ingestbe.domain.Jobposting;

import com.be.ingestbe.dto.JobpostingDto;
import com.be.ingestbe.service.JobpostingService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.MDC;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
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

    @GetMapping("/log")
    public String logging(){
        log.trace("log --> TRACE");
        log.debug("log --> DEBUG");
        log.info("log --> INFO");
        log.warn("log -->  WARN");
        log.error("log --> ERROR");
        return "log";
    }

    @GetMapping("/mdc")
    public String mdc(){
//        멀티쓰레드 환경에서 로그를 남길 때 사용하는 개념
        MDC.put("job","dev");
        log.trace("log --> TRACE");
        log.debug("log --> DEBUG");
        log.info("log --> INFO");
        log.warn("log -->  WARN");
        log.error("log --> ERROR");
        MDC.clear();
        return "mdc";
    }
}
