create table users
(
    id bigint not null auto_increment,
    userid varchar(255) not null,
    pwd varchar(255) not null,
    name varchar(255) not null,
    primary key(id)
);