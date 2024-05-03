package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.RoleNotFoundException;
import com.cifer.app.backend.exception.UserAlreadyExistException;
import com.cifer.app.backend.exception.UserNotFoundException;
import com.cifer.app.backend.model.Role;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.repository.RoleRepository;
import com.cifer.app.backend.repository.UserRepository;
import com.cifer.app.backend.request.RegistrationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<User> getAllUsersByRole(String role) {

        return userRepository.findAllByRole(role);
    }

    @Override
    public User register(RegistrationRequest registrationRequest) {
        if (userRepository.existsByEmail(registrationRequest.getEmail())) {
            throw new UserAlreadyExistException(registrationRequest.getEmail() + " already exists");
        }
        User user = new User();
        user.setFirstName(registrationRequest.getFirstName());
        user.setLastName(registrationRequest.getLastName());
        user.setEmail(registrationRequest.getEmail());
        user.setPassword(registrationRequest.getPassword());
        Role userRole = roleRepository.findByName(registrationRequest.getRole()).get();
        user.setRole(userRole);
        return userRepository.save(user);
    }

    @Override
    public User getUserByEmail(String email) {
        if (!userRepository.existsByEmail(email)) {
            throw new UserNotFoundException("User with email address " + email + " not found !!!");
        }
        User user = userRepository.findByEmail(email).get();
        return user;
    }

    @Override
    public String updateUserByEmail(String email, User newUser) {
        if (!userRepository.existsByEmail(email)) {
            throw new UserNotFoundException("User with email address " + email + " not found !!!");
        }
        User user = userRepository.findByEmail(email).get();
        if (newUser.getFirstName() != null) {
            user.setFirstName(newUser.getFirstName());
        }
        if (newUser.getLastName() != null) {
            user.setLastName(newUser.getLastName());
        }
        if (newUser.getPhoneNumber() != null) {
            user.setPhoneNumber(newUser.getPhoneNumber());
        }
        if (newUser.getData() != null) {
            user.setData(newUser.getData());
        }
        userRepository.save(user);
        return "User update successfully";
    }

    @Override
    public String deleteUserByEmail(String email) {
        if (!userRepository.existsByEmail(email)) {
            throw new UserNotFoundException("User with email address " + email + " not found !!!");
        }
        userRepository.deleteByEmail(email);
        return "Delete user successfully";
    }
}
