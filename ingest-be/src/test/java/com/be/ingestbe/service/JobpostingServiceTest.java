package com.be.ingestbe.service;

import com.be.ingestbe.repository.JobpostingRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.*;


@ExtendWith(MockitoExtension.class)
class JobpostingServiceTest {

    @InjectMocks
    private JobpostingService sut;
    @Mock
    private JobpostingRepository jobpostingRepository;

    @DisplayName("스킬 컬럼 값들 들고오기")
    @Test
    void givenSearchParameters_whenSearchingJobPosting_thenReturnSkills(){
        // Given

        // When

        // Then
    }
}