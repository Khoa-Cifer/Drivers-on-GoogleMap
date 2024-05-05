package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.IllegalProductOrderException;
import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.repository.LogRepository;
import com.cifer.app.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class LogServiceImpl implements LogService {
    private final LogRepository logRepository;
    private final UserRepository userRepository;
    private final UserService userService;

    @Override
    public String createLog(Log log) {
        User order = log.getOrder();
        User driver = log.getDriver();

        if (Objects.equals(order.getRole().getName(), "ROLE_CUSTOMER")
            || Objects.equals(driver.getRole().getName(), "ROLE_DRIVER")) {
            log.setStatus("pending"); //start a new request from customer, waiting for delivery

            int orderQuantity = log.getDeliveredQuantity();
            int productQuantity = log.getProduct().getQuantity();

            if (orderQuantity > productQuantity) {
                throw new IllegalProductOrderException("We do not have enough !!");
            }
        }

        logRepository.save(log);
        return "Log create successfully";
    }

    @Override
    public String updateLog(Long id, Log newLog) {
        return "";
    }

    @Override
    public String deleteLog(Long logId) {
        return "";
    }

    @Override
    public String getAllLogsBasedOnUser(Long userId) {
        return "";
    }

    @Override
    public String getLog(Long logId) {
        return "";
    }

    @Override
    public String getAllLogs() {
        return "";
    }
}
