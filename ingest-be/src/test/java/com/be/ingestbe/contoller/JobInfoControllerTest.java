package com.be.ingestbe.contoller;

import com.be.ingestbe.dto.SearchSemiPostingDto;
import com.be.ingestbe.enums.SearchType;
import com.be.ingestbe.service.JobPostingService;
import com.be.ingestbe.service.PaginationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@DisplayName("RestApi 컨트롤러 - jobinfo")
@AutoConfigureMockMvc
@SpringBootTest
class JobInfoControllerTest {
    private final MockMvc mvc;
    @Autowired
    ObjectMapper mapper;


    public JobInfoControllerTest(@Autowired MockMvc mvc) {
        this.mvc = mvc;
    }

    @Test
    public void givenNothing_whenRequestingJobinfo_thenReturnJobinfoRestApi() throws Exception{
        // Given

        // When & Then
        mvc.perform(get("/jobinfo/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.TEXT_HTML))
                .andDo(print());
    }

    @Test
    public void givenNothing_whenRequestingSkills_thenReturnSkillsRestApi() throws Exception{
        // Given

        // When & Then
        mvc.perform(get("/jobinfo/skills"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.TEXT_HTML))
                .andDo(print());
    }

    @Test
    public void givenSkill_whenSearchingSkills_thenReturnSkillsRestApi() throws Exception{
        // Given

        // When & Then
        mvc.perform(get("/jobinfo/locations/python"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print());
    }

    @Test
    public void givenNone_whenSearchingLocations_thenReturnLocationsCounting() throws Exception{
        // Given

        // When & Then
        mvc.perform(get("/jobinfo/exposebylocation"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON_VALUE))
                .andDo(print());
    }

    @DisplayName("[view][Get] 지역의 상세 공고를 페이징 기능을 구현")
    @Test
    public void givenSkillsAndLocation_whenSearchingPosting_thenReturnPostings() throws Exception{
        // Given
        SearchType searchType =SearchType.SKILL;
        String body = mapper.writeValueAsString(
                SearchSemiPostingDto.of("skill", "java","강남")
        );

//        given(jobpostingService.searchSemiJobPostings(eq(searchType), eq(body), any(Pageable.class))).willReturn(Page.empty());
//        given(jobpostingService.searchSemiJobPostings(null,null,pageable)).willReturn(Page.empty());
//        given(paginationService.getPaginationBarNumbers(pageable.getPageNumber(), Page.empty().getTotalPages())).willReturn(barNumbers);


        // When
        mvc.perform(
                        post("/jobinfo/searchposting")
                                .queryParam("page", String.valueOf(1))
//                                .queryParam("size", String.valueOf(10))
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(body)
                )
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
    }

}