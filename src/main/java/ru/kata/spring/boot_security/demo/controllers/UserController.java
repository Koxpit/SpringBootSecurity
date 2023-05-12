package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.spring.boot_security.demo.models.Role;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.security.Principal;
import java.util.Arrays;
import java.util.Set;

@Controller
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping("/user")
    public String getUserInfo(Principal principal, ModelMap model) {
        User user = userService.loadUserByUsername(principal.getName());
        StringBuilder roles = new StringBuilder();
        for (GrantedAuthority authority : user.getAuthorities()) {
            roles.append(authority.getAuthority());
        }
        model.addAttribute("user", user);
        model.addAttribute("roles", roles.toString());
        return "user-page";
    }



}
