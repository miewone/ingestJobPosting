package com.be.ingestbe.contoller;

import com.be.ingestbe.common.dto.BaseResponseInfo;
import lombok.RequiredArgsConstructor;
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
}
