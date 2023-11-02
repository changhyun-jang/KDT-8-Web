package com.mybatis.testmybatis.mapper;

import com.mybatis.testmybatis.domain.Users;
import java.util.List;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UsersMapper {
    //xml 참고하기
   List<Users> findAll();

   //xml참고 안하기(어노테이션이용){
    @Insert("insert into users (name, address) values(#{name}, #{address})")
    void insertUser(Users user);
}
