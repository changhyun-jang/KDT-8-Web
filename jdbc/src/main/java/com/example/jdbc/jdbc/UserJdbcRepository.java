package com.example.jdbc.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


@Repository
public class UserJdbcRepository {
    @Autowired
    private JdbcTemplate jdbc;

    private static String INSERT_USER =
            """
            insert into users (id,name,address) values (?,?,?);                      
            """;
    private static String DELETE_USER =
            """
            delete from users where id= ?;                    
            """;
    public void insert(Users users){
        jdbc.update(INSERT_USER, users.getId(),users.getName(),users.getAddress());
    }
    public void delete(long id){
        jdbc.update(DELETE_USER,id);
    }
}
