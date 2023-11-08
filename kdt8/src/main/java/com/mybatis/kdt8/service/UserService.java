package com.mybatis.kdt8.service;

import com.mybatis.kdt8.domain.User;
import com.mybatis.kdt8.dto.UserDto;
import com.mybatis.kdt8.entity.UserEntity;
import com.mybatis.kdt8.mapper.UserMapper;
import com.mybatis.kdt8.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserMapper userMapper;

    @Autowired
    UserRepository userRepository;

    public List<UserDto> getUserList(){
        //mapper->jpa : repository를 실행하고 entity 객체를 return 받는다.
        List<UserEntity> result = userRepository.findAll();
        List<UserDto> users=new ArrayList<>();
        for(UserEntity user : result){
            UserDto userDto= UserDto.builder()
                    .id(user.getId())
                    .name(user.getName())
                    .nickname(user.getNickname())
                    .build();
            users.add(userDto);
        }
        return users;
    }


//    public List<UserDto> getUserList(){
//        List<User> result = userMapper.retrieveAll();
//        List<UserDto> users=new ArrayList<>();
//        for(int i =0; i<result.size() ; i++){
//            UserDto user=UserDto.builder().id(result.get(i).getId()).name(result.get(i).getName()).build();
//            users.add(user);
////            UserDto user=new UserDto();
////            user.setId(result.get(i).getId());
////            user.setName(result.get(i).getName());
////            user.setNickname(result.get(i).getNickname());
////            user.setNo(result.get(i).getId()+100);
//
////            UserDtoBuilder userdto= UserDtoBuilder.builder().id(1).name("name").build();
//        }
//        return users;
//    }

    public void insertUser(User user){
        userMapper.insertUser(user);

    }
}
