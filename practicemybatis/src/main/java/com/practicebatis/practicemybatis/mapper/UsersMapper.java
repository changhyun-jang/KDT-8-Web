package com.practicebatis.practicemybatis.mapper;

import com.practicebatis.practicemybatis.domain.Users;
import com.practicebatis.practicemybatis.dto.UserDto;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

@Mapper
public interface UsersMapper {
    @Insert("insert into users (userid, pwd, name) values (#{userid}, #{pwd}, #{name})")
    void insertUser(Users users);

    @Select("select * from users where userid= #{userid} and pwd= #{pwd}")
    UserDto findOne(String userid, String pwd);

    @Update("update users set name= #{name}, pwd= #{pwd} where userid= #{userid}")
    void updateUser(String name, String pwd, String userid);

    @Delete("delete from users where userid=#{userid}")
    void deleteUser(String userid);
}
