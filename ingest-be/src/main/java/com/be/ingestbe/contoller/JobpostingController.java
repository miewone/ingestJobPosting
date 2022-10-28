package com.be.ingestbe.contoller;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.service.JobpostingService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/Jobposting")
@RestController
@RequiredArgsConstructor
public class JobpostingController {
    private static JobpostingService JobpostingService;

    @GetMapping("/all")
    public List<Jobposting> get_Jobpostings(){
        return JobpostingService.Jobpostings();
    }

//    @GetMapping("/skills")
//    public List<String> get_Jobposting_skills(){
//        return JobpostingService.get_Jobposting_skills();
//    }
}
