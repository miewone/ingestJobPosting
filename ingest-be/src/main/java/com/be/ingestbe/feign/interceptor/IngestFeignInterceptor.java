package com.be.ingestbe.feign.interceptor;

import feign.Request;
import feign.RequestInterceptor;
import feign.RequestTemplate;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor(staticName = "of")
public class IngestFeignInterceptor implements RequestInterceptor {
    @Override
    public void apply(RequestTemplate template) {
        // get 요청일 경우
        if(template.method() == Request.HttpMethod.GET.name()){
            System.out.println("[GET] [IngestFeignInterceptor] queries : "+template.queries());
            return;
        }

        template.body()
    }
}
