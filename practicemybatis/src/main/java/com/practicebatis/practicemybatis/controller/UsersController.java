package com.practicebatis.practicemybatis.controller;

import com.practicebatis.practicemybatis.dto.LoginDto;
import com.practicebatis.practicemybatis.dto.RegisterDto;
import com.practicebatis.practicemybatis.dto.UpdateDto;
import com.practicebatis.practicemybatis.dto.UserDto;
import com.practicebatis.practicemybatis.dto.UserIdDto;
import com.practicebatis.practicemybatis.service.UsersService;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UsersController {

    @Autowired
    UsersService usersService;

    @GetMapping("/")
    public String getPageRegister(){
        return "register";
    }

    @GetMapping("/login")
    public String getPageLogin(){
        return "login";
    }
    @GetMapping("/update/{userid}")
    public String getPageUpdate(@PathVariable String userid, Model model){
        model.addAttribute("userid",userid);
        return "update";
    }


    @PostMapping("/register")
    @ResponseBody
    public String registerUser(@RequestBody RegisterDto registerDto){
        UserDto userDto= new UserDto();
        userDto.setUserid(registerDto.getUserid());
        userDto.setPwd(registerDto.getPwd());
        userDto.setName(registerDto.getName());
        usersService.addUser(userDto);

       return "성공";
    }

    @PostMapping("/login")
    @ResponseBody
    public String loginUser(@RequestBody LoginDto loginDto, Model model){
        UserDto userDto = usersService.searchUser(loginDto);
        if(userDto!=null){
            String userName=userDto.getUserid();
            return userName;
        }else{
            return null;
        }

    }

    @PatchMapping("/update")
    @ResponseBody
    public String UpdateUser(@RequestBody UpdateDto updateDto){
        usersService.updateUser(updateDto);
        return "성공";
    }

    @DeleteMapping("/delete")
    @ResponseBody
    public String deleteUser(@RequestBody UserIdDto userIdDto){
        usersService.deleteUser(userIdDto);
        return "성공";
    }



}
