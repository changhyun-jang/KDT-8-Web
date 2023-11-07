package com.mybatis.kdt8.mapper;

import com.mybatis.kdt8.domain.User;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    //mapper를 참고
    List<User> retrieveAll();
    @Insert("insert into user(name,nickname) values(#{name},#{nickname})")
    void insertUser(User user);
}
