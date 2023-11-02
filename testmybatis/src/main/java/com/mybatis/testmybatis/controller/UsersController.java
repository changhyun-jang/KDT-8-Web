package com.mybatis.testmybatis.controller;

import com.mybatis.testmybatis.domain.Users;
import com.mybatis.testmybatis.dto.UsersDto;
import com.mybatis.testmybatis.srevice.UsersService;
import java.util.List;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UsersController {
    @Autowired
    private UsersService usersService;
    /**
     * @Autowired
     * 이 어노테이션은 사용하면 Spring 컨테이너가 자동으로 해당 타입의 Bean을 필드나 메소드에 주입
     * 1. 필드 주입 : spring이 자동으로 필드에 주입
     * 장접 : 코드가 간결해짐
     * 단점 : 의존성을 변경시키거나 테스트에 어려움이 생길 수있음
     *
     * 2. 생성자 주입 : Spring이 생성자의 파라미터 타입에 맞는 빈을 찾아 주입
     * 불변성을 보장(객체의 상태가 생성된 후 변경하지않음)
     * 
     * @Autowired vs new
     * 공통점 : 객체를 새엉하고 참조하는데 사용
     * 차이점 :
     * - @Autowired : Spring의 IoC 컨테이너를 통해 의존성 주입
     * - new : 개발자가 명시적으로 객체를 생성
     *
     */

    @GetMapping("/users")
    public String getUsers(Model model){
        List<UsersDto> usersList=usersService.getUsersList();
        model.addAttribute("list",usersList);
        return "user";
    }

    @GetMapping("/insert")
    public String getInsertUser(@RequestParam String name,@RequestParam String address, Model model){
        UsersDto user=new UsersDto();
        user.setName(name);
        user.setAddress(address);

        usersService.add(user);
        model.addAttribute("list",null);
        return "user";
    }
}
