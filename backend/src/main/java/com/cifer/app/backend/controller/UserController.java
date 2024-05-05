package com.cifer.app.backend.controller;

import com.cifer.app.backend.model.User;
import com.cifer.app.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UserController {
    private final UserService userService;

    @GetMapping("/all-users")
    public ResponseEntity<List<User>> allUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/{role}")
    public ResponseEntity<List<User>> allUsersFilteredByRole(@PathVariable("role") String name) {
        List<User> usersFilteredByRole = userService.getAllUsersByRole(name);
        return ResponseEntity.ok(usersFilteredByRole);
    }
}
