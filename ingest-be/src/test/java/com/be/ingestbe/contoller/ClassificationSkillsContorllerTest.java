package com.be.ingestbe.contoller;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@DisplayName("RestAPI ClassificationSkills 컨트롤러 테스트")
@AutoConfigureMockMvc
@SpringBootTest
class ClassificationSkillsContorllerTest {

    private final MockMvc mvc;

    public ClassificationSkillsContorllerTest(@Autowired MockMvc mvc){this.mvc =mvc;}

    @DisplayName("1. 분류된 스킬들과 카테고리들을 전부 돌려줌.")
    @Test
    public void givenNothing_whenViewAllClassificationSkills_thenReturnAll() throws Exception{
        // Given

        // When
        mvc.perform(get("/category/all"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
        // Then
    }

    @DisplayName("2. 검색된 카테고리에 속한 스킬들을 돌려줌.")
    @Test
    public void givenCategoryKeyword_whenViewAllClassificationSkills_thenReturnSkills() throws Exception{
        // Given
        String body = "IT/인터넷";
        // When
        mvc.perform(
                post("/category/search")
                        .content(body)
                )
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
        // Then
    }

    @DisplayName("3. 모든 카테고리 검색")
    @Test
    public void givenNothing_whenViewAllCategory_thenReturnCategories() throws Exception{
        // Given
        // When
        mvc.perform(get("/category/onlycategory"))
                .andExpect(status().isOk())
                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
                .andDo(print());
        // Then
    }

}