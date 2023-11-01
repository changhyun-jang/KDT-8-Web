package com.example.jdbc.jdbc;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Users {
    private long id;
    private String name;
    private String address;

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                '}';
    }

    public Users(long id, String name, String address){
        this.id=id;
        this.name=name;
        this.address=address;
    }
}
