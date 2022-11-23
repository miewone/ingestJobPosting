package com.be.ingestbe.feign.client;


import com.be.ingestbe.common.dto.BaseResponseInfo;
import com.be.ingestbe.feign.config.IngestFeignConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(
        name= "ingest-client",
        url= "${feign.url.prefix}",
        configuration = IngestFeignConfig.class
)

public interface IngestFeignClient {

    @GetMapping("/get")
    ResponseEntity<BaseResponseInfo> callGet(@RequestHeader("CustomHeader") String customHeader,
                                             @RequestParam("name") String name,
                                             @RequestParam("age") Long age);
    @GetMapping("/error")
    ResponseEntity<BaseResponseInfo> callErrorDecoder();

//    @GetMapping("/all")
//    ResponseEntity<BaseResponseInfo> callGet();
}
