package com.be.ingestbe.contoller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@DisplayName("RestApi 컨트롤러 - jobinfo")
@AutoConfigureMockMvc
@SpringBootTest
class JobInfoControllerTest {
    private final MockMvc mvc;

    public JobInfoControllerTest(@Autowired MockMvc mvc) {
        this.mvc = mvc;
    }

    @Test
    public void givenNothing_whenRequestingJobinfo_thenReturnJobinfoRestApi() throws Exception{
        // Given

        // When & Then
        mvc.perform(get("/Jobposting/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.TEXT_HTML))
                .andDo(print());
    }

    @Test
    public void givenNothing_whenRequestingSkills_thenReturnSkillsRestApi() throws Exception{
        // Given

        // When & Then
        mvc.perform(get("/Jobposting/skills"))
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

}