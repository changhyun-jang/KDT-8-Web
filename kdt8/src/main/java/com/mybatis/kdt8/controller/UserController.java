package com.mybatis.kdt8.controller;

import com.mybatis.kdt8.domain.User;
import com.mybatis.kdt8.dto.UserDto;
import com.mybatis.kdt8.service.UserService;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping
    public String getUsers(Model model){
        List<UserDto> users= userService.getUserList();
        model.addAttribute("list",users);
        return "user";
    }

    @GetMapping("user")
    public String getUserInsert(@RequestParam String name, @RequestParam String nickname){
        User user=new User();
        user.setName(name);
        user.setNickname(nickname);

        userService.insertUser(user);
        return "user";
    }
}
