package com.be.ingestbe.config;

import com.be.ingestbe.feign.logger.FeignCustomLogger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.Logger;


@Configuration
public class FeignConfig {

    @Bean
    public Logger feignLogger(){
        return new FeignCustomLogger();
    }
}
