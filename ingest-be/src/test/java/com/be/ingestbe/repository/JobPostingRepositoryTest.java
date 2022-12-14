package com.be.ingestbe.repository;

import com.be.ingestbe.domain.Jobposting;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class JobPostingRepositoryTest {

    private final JobPostingRepository jobpostingRepository;

    JobPostingRepositoryTest(@Autowired JobPostingRepository jobpostingRepository){
        this.jobpostingRepository = jobpostingRepository;
    }

    @DisplayName("select 테스트")
    @Test
    void givenNone_whenSelecting_thenAllValues(){
        // Given

        // When
        List<Jobposting> jobpostings = jobpostingRepository.findAll();
        // Then
        assertThat(jobpostings)
                .isNotNull()
                .hasSize(1117);
    } // https://charliezip.tistory.com/21

    @DisplayName("select where 테스트")
    @Test
    void given_when_then() {
        String searchKeyword = "java";

        List<Jobposting> jobpostings = jobpostingRepository.findAllBySkillsContaining(searchKeyword);
        assertThat(jobpostings)
                .isNotNull()
                .hasSize(205);
    }
}