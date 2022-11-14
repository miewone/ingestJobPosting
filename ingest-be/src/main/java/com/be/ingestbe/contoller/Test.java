package com.be.ingestbe.contoller;

import com.be.ingestbe.common.dto.BaseResponseInfo;
import com.be.ingestbe.feign.client.IngestFeignClient;
import com.be.ingestbe.service.TestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class Test {

    private final TestService testService;



    @GetMapping("/get")
    public String get(){
        return testService.demoGetTest();
    }
}
