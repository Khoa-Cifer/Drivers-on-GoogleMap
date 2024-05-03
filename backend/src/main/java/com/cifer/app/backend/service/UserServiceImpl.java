package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.UserAlreadyExistException;
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
    public List<User> getAllDrivers() {
        return List.of();
    }

    @Override
    public List<User> getAllCustomers() {
        return List.of();
    }

    @Override
    public User getDriverByEmail(String email) {
        return null;
    }

    @Override
    public User getCustomerByEmail(String email) {
        return null;
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
        Role userRole = roleRepository.findByName("ROLE_CUSTOMER").get();
        user.setRole(userRole);
        return userRepository.save(user);
    }
}
