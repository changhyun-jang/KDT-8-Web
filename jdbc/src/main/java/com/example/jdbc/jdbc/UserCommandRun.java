package com.example.jdbc.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//repository도 아니고 service도 아니고 controller도 아닐때 , @component를 통해 Bean등록
@Component
public class UserCommandRun implements CommandLineRunner {
    //CommandLineRunner : 실행할때마다 이 클래스 안을 실행

    @Autowired
    private UserJdbcRepository userJdbcRepository;

    @Override
    public void run(String... args) throws Exception {
        userJdbcRepository.insert(new Users(3,"KIM","Suwon"));
        userJdbcRepository.insert(new Users(2,"Lee","Suwon"));
        userJdbcRepository.insert(new Users(1,"Jang","Suwon"));

        userJdbcRepository.delete(1);
    }


}
