package com.be.ingestbe.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum CodeEnum {
    SUCCESS("200","SUCCESS"),
    PARAMETER_ERROR("405","PARAMETER_ERROR"),
    UNKNOWN_ERROR("999","UNKNOWN_ERROR");

    private String code;
    private String message;
}
