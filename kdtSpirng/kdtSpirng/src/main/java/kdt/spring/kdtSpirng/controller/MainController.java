package kdt.spring.kdtSpirng.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MainController {
    @GetMapping("/request")
    public String main(){
        return "request";
    }
    @GetMapping("/get/response1")
    public String getResponse1(@RequestParam(value="name", required = true) String n, Model model){
        model.addAttribute("name",n);
        return "response";
    }
    @GetMapping("/get/response2")
    public String getResponse2(@RequestParam(value="name", required = false) String n, Model model){
        model.addAttribute("name",n);
        return "response";
    }
    @GetMapping({"/get/response3/{name}/{age}", "/get/response4/{name}"})
    //~/{value}로 표현할때는 직접 표현해줘야함
    public String getResponse3(@PathVariable("name") String abs, @PathVariable(required = false) String age,  Model model){
        return"response";
    }

    //PostMapping-form
    @PostMapping("/post/response1")
    public String postResponse1(@RequestParam String name, Model model){
        //RequestBody : 클라이언트가 전달하는 Json형태의 내용을 JSON object로 변환해준다.
        //RequestParam의 required가true면, 빈값이어도 무조건 와야 한다.
        model.addAttribute("name",name);
        return "response";
    }
    @PostMapping("/post/response2")
    public String postResponse2(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }

    //ResponseBody : api쓸 때 사용하는 친구 -> template을 호출하는게 아니라 값을 전달
    //ResponseBody가 없으면 res.render고, 있으면 res.send라고 생각하면 됌
    @PostMapping("/post/response3")
    @ResponseBody
    public String postResponse3(@RequestParam(required = false) String name, Model model){
        model.addAttribute("name",name);
        return "response";
    }
}
