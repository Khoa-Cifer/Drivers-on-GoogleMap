package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Order;

import java.util.Date;
import java.util.List;

public interface OrderService {
    String createOrder(Order order); //used when customer book a driver

    Order getOrderByUserIdAndDate(Long id, Date startDate, Date endDate); //get all orders from user if date is not set

    List<Order> getAllOrders(); //get order history, used by admin

    List<Order> getAllOrdersFilteredByDate(Date startDate, Date endDate); //get order history, used by admin
}
