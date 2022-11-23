package com.be.ingestbe.contoller;

import com.be.ingestbe.common.dto.BaseResponseInfo;
import com.be.ingestbe.enums.CodeEnum;
import com.be.ingestbe.exception.CustomException;
import com.be.ingestbe.feign.client.IngestFeignClient;
import com.be.ingestbe.service.TestService;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
public class Test {

    private final TestService testService;
//    public static final Logger log = LoggerFactory.getLogger(Test.class);



    @GetMapping("/get")
    public String get(){
        return testService.demoGetTest();
    }
//  ErrorDecode
    @GetMapping("/error")
    public String errorDecoderController(){
        return testService.error();
    }
//  ErrorDecode 끝
//    로깅 부분
    @GetMapping("/query2")
    public String query2(){
        log.trace("log --> TRACE");
        log.debug("log --> DEBUG");
        log.info("log --> INFO");
        log.warn("log -->  WARN");
        log.error("log --> ERROR");
        return "query2";
    }

    @GetMapping("/query")
    public String query(){
        log.trace("log --> TRACE");
        log.debug("log --> DEBUG");
        log.info("log --> INFO");
        log.warn("log -->  WARN");
        log.error("log --> ERROR");
        return "query";
    }

    @GetMapping("/log")
    public String logging(){
        log.trace("log --> TRACE");
        log.debug("log --> DEBUG");
        log.info("log --> INFO");
        log.warn("log -->  WARN");
        log.error("log --> ERROR");
        return "log";
    }

    @GetMapping("/mdc")
    public String mdc(){
//        멀티쓰레드 환경에서 로그를 남길 때 사용하는 개념
        MDC.put("job","dev");
        log.trace("log --> TRACE");
        log.debug("log --> DEBUG");
        log.info("log --> INFO");
        log.warn("log -->  WARN");
        log.error("log --> ERROR");
        MDC.clear();
        return "mdc";
    }
//    로깅 부분 끝

    @GetMapping("/exception")
    public String exception(){
        if(true){
            throw new CustomException(CodeEnum.UNKNOWN_ERROR);
        }
        return testService.exception();
    }
}
