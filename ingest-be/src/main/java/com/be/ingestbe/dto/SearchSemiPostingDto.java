package com.be.ingestbe.dto;


import com.be.ingestbe.enums.SearchType;

import java.io.Serializable;

public record SearchSemiPostingDto(
        String searchType,
        String skill,
        String location
        )implements Serializable
{
        public static SearchSemiPostingDto of(
                String searchType,
                String skill,
                String location
        ){
                return new SearchSemiPostingDto(searchType, skill, location);
        }
        public static SearchSemiPostingDto of(
                String searchType,
                String skill,
                String location,
                int page
        ){
                return new SearchSemiPostingDto(searchType, skill, location);
        }
}
