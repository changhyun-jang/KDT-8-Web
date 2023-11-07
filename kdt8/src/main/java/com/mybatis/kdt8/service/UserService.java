package com.mybatis.kdt8.service;

import com.mybatis.kdt8.domain.User;
import com.mybatis.kdt8.dto.UserDto;
import com.mybatis.kdt8.mapper.UserMapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    public List<UserDto> getUserList(){
        List<User> result = userMapper.retrieveAll();
        List<UserDto> users=new ArrayList<>();
        for(int i =0; i<result.size() ; i++){
            UserDto user=new UserDto();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setNickname(result.get(i).getNickname());
            user.setNo(result.get(i).getId()+100);
            users.add(user);
        }
        return users;
    }

    public void insertUser(User user){
        userMapper.insertUser(user);

    }
}
