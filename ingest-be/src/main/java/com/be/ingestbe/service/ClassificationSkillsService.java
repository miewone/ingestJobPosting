package com.be.ingestbe.service;

import com.be.ingestbe.domain.ClassificationSkills;
import com.be.ingestbe.mapper.ClassificationSkillsMapper;
import com.be.ingestbe.repository.ClassificationSkillsMapperRepository;
import com.be.ingestbe.repository.ClassificationSkillsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ClassificationSkillsService {
    // TODO 해당 classification 관련 서비스는 jobposting 서브스와 유사한 점이 많으므로 팩토리 메소드형식으로 리팩토링을 해보자.
    private final ClassificationSkillsRepository classificationSkillsRepository;
    private final ClassificationSkillsMapperRepository classificationSkillsMapperRepository;
    public List<ClassificationSkillsMapper> getskills(){
        return classificationSkillsMapperRepository.findAllBy();
    }

    public List<String> getOnlyCategory(){
        return classificationSkillsMapperRepository.findAllDistinctByCategory();
    }
    public Map<String,Long> searchCategory(String category){
        return classificationSkillsMapperRepository
                .findAllByCategory(category)
                .stream()
                .map(ClassificationSkills::getSkill)
                .collect(Collectors.groupingBy(String::toString,Collectors.counting()));
    }

}
