package com.be.ingestbe.repository;

import com.be.ingestbe.domain.ClassificationSkills;
import com.be.ingestbe.dto.ClassificationSkillsDto;
import com.be.ingestbe.mapper.ClassificationSkillsMapper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ClassificationSkillsMapperRepository extends JpaRepository<ClassificationSkills,Long> {
    List<ClassificationSkillsMapper> findAllBy();
    Optional<List<ClassificationSkillsDto>> findAllByCategory(String category);

    @Query("SELECT DISTINCT c.category FROM ClassificationSkills c")
    List<String> findAllDistinctByCategory();

}
