package com.practicebatis.practicemybatis.service;

import com.practicebatis.practicemybatis.domain.Users;
import com.practicebatis.practicemybatis.dto.LoginDto;
import com.practicebatis.practicemybatis.dto.UpdateDto;
import com.practicebatis.practicemybatis.dto.UserDto;
import com.practicebatis.practicemybatis.dto.UserIdDto;
import com.practicebatis.practicemybatis.mapper.UsersMapper;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersService {
    @Autowired
    UsersMapper usersMapper;
    public void addUser(UserDto userDto){
        Users users= new Users();
        users.setUserid(userDto.getUserid());
        users.setPwd(userDto.getPwd());
        users.setName(userDto.getName());
        usersMapper.insertUser(users);
    }

    public UserDto searchUser(LoginDto loginDto){
        UserDto one = usersMapper.findOne(loginDto.getUserid(), loginDto.getPwd());
        return one;
    }

    public void updateUser(UpdateDto updateDto){
        usersMapper.updateUser(updateDto.getName(),updateDto.getPwd(),updateDto.getUserid());
    }

    public void deleteUser(UserIdDto userIdDto){
        usersMapper.deleteUser(userIdDto.getUserid());
    }

}
