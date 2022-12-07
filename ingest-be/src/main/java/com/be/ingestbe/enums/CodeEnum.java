package com.be.ingestbe.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum CodeEnum {
    SUCCESS("200","SUCCESS"),
    PARAMETER_ERROR("405","PARAMETER_ERROR"),
    EMPTY_ERROR("406","EMPTY_ERROR"),
    UNKNOWN_ERROR("999","UNKNOWN_ERROR"),
    LOCATION_ERROR("1000","LOCATION_NOT_FOUND");
    private String code;
    private String message;
}
