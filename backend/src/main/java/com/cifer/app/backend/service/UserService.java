package com.cifer.app.backend.service;

import com.cifer.app.backend.model.User;
import com.cifer.app.backend.request.RegistrationRequest;

import java.util.List;

public interface UserService {
    List<User> getAllDrivers();

    List<User> getAllCustomers();

    User getDriverByEmail(String email);

    User getCustomerByEmail(String email);

    User register(RegistrationRequest registrationRequest);
}
