package com.be.ingestbe.repository;

import com.be.ingestbe.domain.ClassificationSkills;
import com.be.ingestbe.mapper.ClassificationSkillsMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClassificationSkillsMapperRepository extends JpaRepository<ClassificationSkills,Long> {
    List<ClassificationSkillsMapper> findAllBy();
    List<ClassificationSkills> findAllByCategory(String category);

    @Query("SELECT DISTINCT c.category FROM ClassificationSkills c")
    List<String> findAllDistinctByCategory();

}
