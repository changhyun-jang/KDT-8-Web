package com.mybatis.kdt8.dto;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserDto {
    private int id;
    private String name;
    private String nickname;
    private int no;
}
