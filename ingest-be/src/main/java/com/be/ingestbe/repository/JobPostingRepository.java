package com.be.ingestbe.repository;


import com.be.ingestbe.domain.Jobposting;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;
import java.util.Optional;

@RepositoryRestController
public interface JobPostingRepository extends
        JpaRepository<Jobposting,Long>
{
    List<Jobposting> findAll();
    List<Jobposting> findAllBySkillsContaining(String skill);

    List<Jobposting> findAllBySkillsContainingAndAddressCityContaining(String skill, String location);
}
