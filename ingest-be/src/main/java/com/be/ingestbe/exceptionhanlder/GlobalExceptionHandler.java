package com.be.ingestbe.exceptionhanlder;

import com.be.ingestbe.enums.CodeEnum;
import com.be.ingestbe.exception.CustomException;
import com.be.ingestbe.response.CommonResponse;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(CustomException.class)
    public CommonResponse handlerCustomException(CustomException e){
        return CommonResponse.builder()
                .returnCode(e.getReturnCode())
                .returnMessage(e.getReturnMessage())
                .build();
    }

    @ExceptionHandler(Exception.class)
    public CommonResponse handlerException(Exception e){
//        내가 대처 못한 에러이기에 아래 처럼 코드를 구현함.
        return CommonResponse.builder()
                .returnCode(CodeEnum.UNKNOWN_ERROR.getCode())
                .returnMessage(CodeEnum.UNKNOWN_ERROR.getMessage())
                .build();
    }
}
