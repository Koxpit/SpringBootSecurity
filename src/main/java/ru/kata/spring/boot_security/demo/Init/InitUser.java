//package ru.kata.spring.boot_security.demo.Init;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//import ru.kata.spring.boot_security.demo.models.Role;
//import ru.kata.spring.boot_security.demo.models.User;
//import ru.kata.spring.boot_security.demo.services.UserService;
//
//import javax.annotation.PostConstruct;
//import java.util.HashSet;
//import java.util.Set;
//
//@Component
//public class InitUser {
//    private UserService userService;
//
//    @Autowired
//    public void setUserServiceImp(UserService userServiceImp) {
//        this.userService = userServiceImp;
//    }
//
//    @PostConstruct
//    public void init(){
//        Role role = new Role("ROLE_ADMIN");
//
//        Set<Role> adminRole = new HashSet<>();
//        adminRole.add(role);
//
//        User user = new User("admin","alex","lesli","test@mail.ru","$2a$12$3sJewj8HepsY/Wk6GMa3tutf2mwBzzRrdqVHaxjvO2LotwGmAF2C6", adminRole); //Pass = 100
//        userService.save(user);
//    }
//}
