package com.be.ingestbe.service;

import com.be.ingestbe.domain.ClassificationSkills;
import com.be.ingestbe.mapper.ClassificationSkillsMapper;
import com.be.ingestbe.repository.ClassificationSkillsMapperRepository;
import com.be.ingestbe.repository.ClassificationSkillsRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.then;

@ExtendWith(MockitoExtension.class)
class ClassificationSkillsServiceTest {
    @InjectMocks
    private ClassificationSkillsService sut;

    @Mock
    private ClassificationSkillsMapperRepository classificationSkillsMapperRepository;

    @DisplayName("카테고리별로 분류된 스킬들을 전부 가져온다.")
    @Test
    void givenNone_whenViewSkills_thenReturnSkills(){
        // Given
        // When
        List<ClassificationSkillsMapper> result = sut.getskills();

        // Then
        assertThat(result)
                .isEmpty();

        then(classificationSkillsMapperRepository).should().findAllBy();
    }

    @DisplayName("카테고리로 검색하여 카테고리에 해당하는 스킬들을 들고온다.")
    @Test
    void givenCategory_whenViewGroupByCategory_thenReturnSkills(){
        // Given
        String searchWord = "IT/인터넷";
        // When
        Map<String,Long> result = sut.searchCategory(searchWord);

        // Then
        assertThat(result)
                .isEmpty();

        then(classificationSkillsMapperRepository).should().findAllByCategory(searchWord);
    }

    @DisplayName("테이블에 있는 카테고리들을 들고온다.")
    @Test
    void givenNothing_whenViewAllCategory_thenReturnCategories(){
        // Given
        // When
        List<String> result = sut.getOnlyCategory();

        // Then
        assertThat(result)
                .isEmpty();

        then(classificationSkillsMapperRepository).should().findAllDistinctByCategory();
    }


}