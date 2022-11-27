package com.be.ingestbe.contoller;

import com.be.ingestbe.dto.JobPostingDto;
import com.be.ingestbe.dto.SearchSemiPostingDto;
import com.be.ingestbe.service.JobPostingService;
import com.be.ingestbe.service.PaginationService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/jobinfo")
@RestController
@RequiredArgsConstructor
public class JobPostingController {

    private final JobPostingService jobPostingService;
    private final PaginationService paginationService;

    @GetMapping("/all")
    public List<JobPostingDto> jobPostings(){
        return jobPostingService.Jobpostings();
    }

    @GetMapping("/skills")
    public List<String> get_Jobposting_skills(){
        return jobPostingService.getJobpostingAllSkills();
    }


    @GetMapping("/exposebylocation")
    public Map<String,Long> jobPostingAllLocations(){
        return jobPostingService.allPostingCounterLocation();
    }

    @PostMapping("/semilocation")
    public Map<String,Long> getLocationByGuAndSkill(@RequestBody JobPostingDto body){
        return jobPostingService.getSelectedLocationAndSkills(body);
    }

    @GetMapping("/locations/{skill}")
    public Map<String,Long> jobPostingSearchBySkill(@PathVariable String skill) throws Exception {
        return jobPostingService.searchJobpostingBySkill(skill);
    }

    @PostMapping("/searchposting")
    public Map<String,Object> searchSkillsAndLocation(
           @RequestBody SearchSemiPostingDto body,
           @PageableDefault(size=10,sort = "title") Pageable pageable){

        HashMap<String,Object> responseBody = new HashMap<>();
        Page<JobPostingDto> postings = jobPostingService.searchSemiJobPostings(body,pageable);
        List<Integer> barNumbers = paginationService.getPaginationBarNumbers(pageable.getPageNumber(),postings.getTotalPages());
        responseBody.put("postings",postings.getContent());
        responseBody.put("barNumbers",barNumbers);
        return responseBody;
    }


}
