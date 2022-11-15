package com.be.ingestbe.contoller;

import com.be.ingestbe.common.dto.BaseResponseInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/target_server")
public class TargetController {

    @GetMapping("/get")
    public BaseResponseInfo demoTest(@RequestHeader("CustomHeader") String header,
                                     @RequestParam("name") String name,
                                     @RequestParam("age") Long age){

        return BaseResponseInfo.builder()
                .age(age)
                .header(header)
                .name(name)
                .build();
    }
    @GetMapping("/error")
    public ResponseEntity<BaseResponseInfo> demoErrorDecoder(){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }


}
