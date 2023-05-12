package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.services.RoleService;
import ru.kata.spring.boot_security.demo.services.UserService;

import java.security.Principal;

@Controller
public class AdminController {
    private final UserService userService;
    private final RoleService roleService;

    public AdminController(UserService userService, RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping(value = "/admin-page")
    public String userList(Model model, Principal principal) {
        model.addAttribute("users", userService.allUsers());
        model.addAttribute("user_roles", roleService.allRoles());
        model.addAttribute("currentUser", userService.loadUserByUsername(principal.getName()));
        return "admin-page";
    }

    @GetMapping("/admin/add-new-user")
    public String addUserForm(Model model, Principal principal) {
        model.addAttribute("user", new User());
        model.addAttribute("currentUser", userService.loadUserByUsername(principal.getName()));
        model.addAttribute("user_roles", roleService.allRoles());
        return "add-new-user";
    }

    @PostMapping("/admin/add-new-user")
    public String addUser(User user) {
        userService.saveUser(user);
        return "redirect:/admin-page";
    }

    @PostMapping("/admin/edit-user/{id}")
    public String editUser(@PathVariable("id") Long id, User user) {
        user.setId(id);
        userService.saveUser(user);
        return "redirect:/admin-page";
    }

    @PostMapping("/admin/delete-user/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return "redirect:/admin-page";
    }
}
