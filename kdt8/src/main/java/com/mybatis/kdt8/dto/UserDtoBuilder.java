package com.mybatis.kdt8.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserDtoBuilder {
    private final int id;
    private final String name;

    public static class Builder {
        private int id;
        private String name;
        public Builder id(int id){
            this.id = id;
            return this;
        }
        public Builder name(String name){
            this.name = name;
            return this;
        }
        public UserDtoBuilder build(){
            return new UserDtoBuilder(id, name);
        }
    }
    public static Builder builder(){
        return new Builder();
    }
}