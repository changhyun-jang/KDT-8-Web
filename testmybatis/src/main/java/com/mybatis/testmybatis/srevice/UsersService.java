package com.mybatis.testmybatis.srevice;

import com.mybatis.testmybatis.domain.Users;
import com.mybatis.testmybatis.dto.UsersDto;
import com.mybatis.testmybatis.mapper.UsersMapper;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsersService {
    @Autowired
    private UsersMapper usersMapper;
    //이거하면 implement한거랑 같은지?

    //사용자 조회
    public List<UsersDto> getUsersList(){
        //실제 데이터베이스에서 가져오는 배열
        List<Users> result = usersMapper.findAll();
        //위에서 받은 Users 배열을 UsersDto로 반환하기
        //DTO는 캡슐화떄문에 쓰므로 직접적으로 DB접근은 좋지 않음.
        List <UsersDto> users = new ArrayList<>();
        for (int i=0; i<result.size();i++){
            UsersDto user=new UsersDto();
            user.setId(result.get(i).getId());
            user.setName(result.get(i).getName());
            user.setAddress(result.get(i).getAddress());

            users.add(user);
        }
        return users;
    }

    //사용자 추가
    public void add(UsersDto user){
        Users users = new Users();
        users.setId(user.getId());
        users.setName(user.getName());
        users.setAddress(user.getAddress());
        usersMapper.insertUser(users);
    }
}
