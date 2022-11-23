package com.be.ingestbe.feign.interceptor;

import feign.Request;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import java.nio.charset.StandardCharsets;

@RequiredArgsConstructor(staticName = "of")
public class IngestFeignInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate template) {
        // get 요청일 경우
        if(template.method() == Request.HttpMethod.GET.name()){
            System.out.println("[GET] [IngestFeignInterceptor] queries : "+template.queries());
            return;
        }

//        template.body()
//        json 형식으로 들어오면 objectMapper를 이용하여 json 값을 푸고 다시 매핑 해주는 로직을 이용해야함.
        String encodeRequestBody = StringUtils.toEncodedString(template.body(), StandardCharsets.UTF_8);
        System.out.printf("[POST] [IngestFeignInterceptor] requestBody :"+encodeRequestBody);

        String convertRequestBody = encodeRequestBody;

        template.body(convertRequestBody);
    }
}
