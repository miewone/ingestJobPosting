package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.repository.JobpostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class JobpostingService {

    private final JobpostingRepository JobpostingRepository;

    public List<Jobposting> Jobpostings(){
        List<Jobposting> tt = JobpostingRepository.findAll();
        return tt;
    }

//    public List<String> get_Jobposting_skills(){
//        return JobpostingRepository.findAllBySkills();
//    }
}
