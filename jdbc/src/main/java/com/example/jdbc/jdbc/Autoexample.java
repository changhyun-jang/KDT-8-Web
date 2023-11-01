package com.example.jdbc.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

@Component
class AutowiredExample{
    public String sayHello(String name){
        return "Hello"+name;
    }
}
@Component
public class Autoexample {
    private final AutowiredExample autowiredExample;
    
    //외부 클래스의 객체를 자동으로 만들어주는 Autowired로 해결
    @Autowired
    public Autoexample(AutowiredExample autowired){
        this.autowiredExample=autowired;
    }

    @GetMapping("/hello")
    public String hello(){
        return autowiredExample.sayHello("장창현");
    }
}
