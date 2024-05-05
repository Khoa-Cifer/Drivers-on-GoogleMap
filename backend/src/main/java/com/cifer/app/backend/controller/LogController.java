package com.cifer.app.backend.controller;

import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.model.Product;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.service.LogService;
import com.cifer.app.backend.service.ProductService;
import com.cifer.app.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/log")
@RequiredArgsConstructor
@CrossOrigin("*")
public class LogController {
    private final LogService logService;
    private final UserService userService;
    private final ProductService productService;

    @PostMapping("/create-log")
    public ResponseEntity<String> createNewLog(@RequestParam("deliveredQuantity") int deliveredQuantity,
                                               @RequestParam("customerEmail") String customerEmail,
                                               @RequestParam("driverEmail") String driverEmail,
                                               @RequestParam("productName") String productName) {
        User customer = userService.getUserByEmail(customerEmail);
        User driver = userService.getUserByEmail(driverEmail);
        Product product = productService.getProductByName(productName);

        Date orderDate = new Date();
        Log newLog = new Log(orderDate, deliveredQuantity, customer, driver, product);
        String successNewLogCreating = logService.createLog(newLog);
        return ResponseEntity.ok(successNewLogCreating);
    }
}
