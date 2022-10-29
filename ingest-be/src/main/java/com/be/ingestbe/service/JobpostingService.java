package com.be.ingestbe.service;

import com.be.ingestbe.domain.Jobposting;
import com.be.ingestbe.repository.JobpostingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class JobpostingService {

    private final JobpostingRepository JobpostingRepository;

    public List<Jobposting> Jobpostings(){
        return JobpostingRepository.findAll();
    }

//    public Optional<List<String>> get_Jobposting_skills(){
//        Optional<List<String>> tt = JobpostingRepository.findAllBySkills();
//        return tt;
//    }
}
