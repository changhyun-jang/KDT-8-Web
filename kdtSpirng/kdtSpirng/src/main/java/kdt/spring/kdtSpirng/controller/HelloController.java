package kdt.spring.kdtSpirng.controller;

import java.util.ArrayList;
import java.util.Arrays;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

class Person{
    public String name;
    public int age;

    Person(String name, int age){
        this.name=name;
        this.age=age;
    }
}
@Controller
public class HelloController {
    @GetMapping("/")
    public String getHello(Model model){
        ArrayList arr=new ArrayList<>();
        Person p1=new Person("kim",31);
        Person p2=new Person("Lee",19);
        Person p3=new Person("Park",22);
        Person p4=new Person("Jang",25);
        arr.add(p1);
        arr.add(p2);
        arr.add(p3);
        arr.add(p4);
        model.addAttribute("arr",arr);
        return "hello" ;
    }
    @GetMapping("/hello")
    public String getHello2(){

        return "hello" ;
    }
}
