package com.be.ingestbe.repository;


import com.be.ingestbe.domain.Jobposting;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController
public interface JobpostingRepository extends
        JpaRepository<Jobposting,Long>
{
    List<Jobposting> findAll();
//    List<String> findAllBySkills();
}
