package com.be.ingestbe.feign.config;

import com.be.ingestbe.feign.decoder.IngestFeignErrorDecoder;
import com.be.ingestbe.feign.interceptor.IngestFeignInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class IngestFeignConfig {

    @Bean
    public IngestFeignInterceptor feignInterceptor(){
        return IngestFeignInterceptor.of();
    }

    @Bean
    public IngestFeignErrorDecoder ingestFeignErrorDecoder(){
        return new IngestFeignErrorDecoder();
    }
}
