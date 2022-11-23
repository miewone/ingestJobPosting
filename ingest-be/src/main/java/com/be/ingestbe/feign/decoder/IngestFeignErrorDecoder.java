package com.be.ingestbe.feign.decoder;

import feign.Response;
import feign.codec.ErrorDecoder;
import org.springframework.http.HttpStatus;

public class IngestFeignErrorDecoder implements ErrorDecoder {
    private final ErrorDecoder errorDecoder = new Default();
    @Override
    public Exception decode(String methodKey, Response response) {
        HttpStatus httpStatus = HttpStatus.resolve(response.status());

        if(httpStatus == HttpStatus.NOT_FOUND){
            System.out.println("[IngestFeignErrorDecoder] Http Status = "+ httpStatus);
            throw new RuntimeException(String.format("[RuntimeException] Http Status is %s", httpStatus));
        }


        return errorDecoder.decode(methodKey,response);
    }
}
