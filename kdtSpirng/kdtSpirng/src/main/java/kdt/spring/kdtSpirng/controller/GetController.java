package kdt.spring.kdtSpirng.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class GetController {

    @GetMapping("/introduce")
    public String introduce(){
        return "practice";
    }
    @GetMapping("/introduce/{name}")
    public String practice1(@PathVariable String name, Model model){
        model.addAttribute("name",name);
        return "practice_result";
    }
    @GetMapping("/introduce2")
    public String practice2(@RequestParam String name, @RequestParam int age, Model model){
        model.addAttribute("name",name);
        model.addAttribute("age",age);
        return "response";
    }
}
