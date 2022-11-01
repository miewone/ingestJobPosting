package com.be.ingestbe.service;

import com.be.ingestbe.mapper.JobPostingSkillsMapping;
import com.be.ingestbe.repository.JobPostingSkillsMapperRespotiroy;
import com.be.ingestbe.repository.JobpostingRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.BDDMockito.then;


@ExtendWith(MockitoExtension.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class JobpostingServiceTest {

    @InjectMocks
    private JobpostingService sut;
    @Mock
    private JobpostingRepository jobpostingRepository;
    @Mock
    private JobPostingSkillsMapperRespotiroy jobPostingSkillsMapperRespotiroy;


    @DisplayName("스킬 검색어로 포스팅을 검색하면 스킬과 지역들을 반환.")
    @Test
    void givenNone_whenGetJobPosting_thenReturnJobPosting(){
        // Given
        // When
        List<String> jobPostingSkillsMappings = sut.getJobpostingAllSkills();


        // Then
        assertThat(jobPostingSkillsMappings)
                .isNotNull();

        then(jobPostingSkillsMapperRespotiroy).should().findAllBy();
    }
    @DisplayName("스킬 검색어로 포스팅을 검색하면 스킬과 지역들을 해쉬맵 형식으로 반환.")
    @Test
    void givenSearchKeyword_whenSearchingJobPosting_thenReturnJobPosting(){
        // Given
        String searchKeyword = "java";
        // When
        Map<String,Long> jobPostingSkillsMappings = sut.searchJobpostingBySkill(searchKeyword);


        // Then
        assertThat(jobPostingSkillsMappings)
                .isNotNull();

        then(jobPostingSkillsMapperRespotiroy).should().findAllBySkillsContaining(searchKeyword);
    }

    @DisplayName("전체공고에서 지역의 차이를 보기위해")
    @Test
    void givenLocation_whenSearchingLocation_thenReturnLocations(){
        // Given
        // When
        Map<String,Long> jobPostingSkillsMappings = sut.allPostingCounterLocation();


        // Then
        assertThat(jobPostingSkillsMappings).isEmpty();

        then(jobPostingSkillsMapperRespotiroy).should().findAllBy();
    }


}