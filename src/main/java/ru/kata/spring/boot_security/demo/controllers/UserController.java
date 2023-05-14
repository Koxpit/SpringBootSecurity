package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.CurrentSecurityContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.security.Principal;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(path = "/api/auth", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> getAuthUser(@CurrentSecurityContext(expression = "authentication") Principal principal) {
        User user = userService.loadUserByUsername(principal.getName());
        return ResponseEntity.ok(user);
    }
}
