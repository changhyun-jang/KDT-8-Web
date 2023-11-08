package com.mybatis.kdt8.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class BoardDto {
    private String no;
    private int id;
    private String title;
    private String content;
    private String writer;
    private String registered;
}
