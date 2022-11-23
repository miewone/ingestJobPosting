package com.be.ingestbe.dto;

import java.io.Serializable;

public record ClassificationSkillsDto(String skill, String category) implements Serializable {
    public static ClassificationSkillsDto of(String skill,String category){
        return new ClassificationSkillsDto(skill,category);
    }
}
