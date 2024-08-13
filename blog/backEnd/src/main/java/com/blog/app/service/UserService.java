package com.blog.app.service;

import com.blog.app.entities.UserEntity;

import java.util.List;

public interface UserService {
    List<UserEntity> findAll();
    UserEntity addNewUser(UserEntity userEntity);
}
