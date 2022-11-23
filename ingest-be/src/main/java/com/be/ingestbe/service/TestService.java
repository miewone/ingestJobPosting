package com.be.ingestbe.service;

import com.be.ingestbe.common.dto.BaseResponseInfo;
import com.be.ingestbe.feign.client.IngestFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TestService {
    private final IngestFeignClient ingestFeignClient;

    public String demoGetTest(){
        ResponseEntity<BaseResponseInfo> response = ingestFeignClient.callGet("CustomHeader","CustomName",1L);
        System.out.println(response.getBody().getName());
        return "get";
    }

    public String error(){
        ingestFeignClient.callErrorDecoder();
        return "error";
    }

    public String exception(){
        return "exception";
    }
}
