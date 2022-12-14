package com.be.ingestbe.service;

import com.be.ingestbe.dto.JobPostingDto;
import com.be.ingestbe.dto.SearchSemiPostingDto;
import com.be.ingestbe.enums.SearchType;
import com.be.ingestbe.repository.JobPostingSkillsMapperRepository;
import com.be.ingestbe.repository.JobPostingRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.BDDMockito.then;


@ExtendWith(MockitoExtension.class)
class JobPostingServiceTest {

    @InjectMocks
    private JobPostingService sut;
    @Mock
    private JobPostingRepository jobpostingRepository;
    @Mock
    private JobPostingSkillsMapperRepository jobPostingSkillsMapperRepository;


    @DisplayName("스킬 검색어로 포스팅을 검색하면 스킬과 지역들을 반환.")
    @Test
    void givenNone_whenGetJobPosting_thenReturnJobPosting(){
        // Given
        // When
        List<String> jobPostingSkillsMappings = sut.getJobpostingAllSkills();


        // Then
        assertThat(jobPostingSkillsMappings)
                .isNotNull();

        then(jobPostingSkillsMapperRepository).should().findAllBy();
    }
    @DisplayName("스킬 검색어로 포스팅을 검색하면 스킬과 지역들을 해쉬맵 형식으로 반환.")
    @Test
    void givenSearchKeyword_whenSearchingJobPosting_thenReturnJobPosting() throws Exception {
        // Given
        String searchKeyword = "java";
        // When
        Map<String,Long> jobPostingSkillsMappings = sut.searchJobpostingBySkill(searchKeyword);


        // Then
        assertThat(jobPostingSkillsMappings)
                .isNotNull();

        then(jobPostingSkillsMapperRepository).should().findAllBySkillsContaining(searchKeyword);
    }

    @DisplayName("전체공고에서 지역의 차이를 보기위해")
    @Test
    void givenLocation_whenSearchingLocation_thenReturnLocations(){
        // Given
        // When
        Map<String,Long> jobPostingSkillsMappings = sut.allPostingCounterLocation();


        // Then
        assertThat(jobPostingSkillsMappings).isEmpty();

        then(jobPostingSkillsMapperRepository).should().findAllBy();
    }

    @DisplayName("지역의 상세 공고를 페이징 기능을 구현")
    @Test
    void givenSkillsAndLocation_whenSearchingPosting_thenReturnPostings(){
        // Given
        SearchType searchType = SearchType.SKILL;
        SearchSemiPostingDto body = SearchSemiPostingDto.of(searchType.name(),"java","강남");
        Pageable pageable = Pageable.ofSize(20);
        // When
        Page<JobPostingDto> jobPostingSkillsAndLocation = sut.searchSemiJobPostings(body,pageable);


        // Then
        assertThat(jobPostingSkillsAndLocation).isEmpty();

        then(jobpostingRepository).should().findAllBySkillsContainingAndAddressCityContaining(body.skill(),body.location());
    }


}