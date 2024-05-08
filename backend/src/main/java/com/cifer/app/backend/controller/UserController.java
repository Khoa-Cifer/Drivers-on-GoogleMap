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
    public ResponseEntity<List<String>> allUsersFilteredByRole(@PathVariable("role") String name) {
        List<String> usersFilteredByRole = userService.getAllUserEmailsByRole(name);
        return ResponseEntity.ok(usersFilteredByRole);
    }

    @GetMapping("/users/role/{email}")
    public ResponseEntity<String> getRoleFromUserEmail(@PathVariable("email") String email) {
        String role = userService.getUserRoleByEmail(email);
        return ResponseEntity.ok(role);
    }
}
