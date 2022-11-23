package com.be.ingestbe.service;

import com.be.ingestbe.domain.ClassificationSkills;
import com.be.ingestbe.dto.ClassificationSkillsDto;
import com.be.ingestbe.enums.CodeEnum;
import com.be.ingestbe.exception.CustomException;
import com.be.ingestbe.mapper.ClassificationSkillsMapper;
import com.be.ingestbe.repository.ClassificationSkillsMapperRepository;
import com.be.ingestbe.repository.ClassificationSkillsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClassificationSkillsService {
    private final ClassificationSkillsMapperRepository classificationSkillsMapperRepository;
    public List<ClassificationSkillsMapper> getskills(){
        return classificationSkillsMapperRepository.findAllBy();
    }

    public List<String> getOnlyCategory(){
        return classificationSkillsMapperRepository.findAllDistinctByCategory();
    }
    public Map<String,Long> searchCategory(String category){
        Optional<List<ClassificationSkillsDto>> searchCategory =classificationSkillsMapperRepository.findAllByCategory(category);

        return searchCategory
                .orElseThrow(() -> new CustomException(CodeEnum.PARAMETER_ERROR))
                .stream()
                .map(ClassificationSkillsDto::skill)
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

}
