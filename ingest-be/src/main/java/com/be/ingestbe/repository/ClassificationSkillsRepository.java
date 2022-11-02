package com.be.ingestbe.repository;


import com.be.ingestbe.domain.ClassificationSkills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

import java.util.List;

@RepositoryRestController
public interface ClassificationSkillsRepository extends JpaRepository<ClassificationSkills,Long> {
}
