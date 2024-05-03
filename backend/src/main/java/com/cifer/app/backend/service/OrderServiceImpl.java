package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Order;

import java.util.Date;
import java.util.List;

public class OrderServiceImpl implements OrderService {
    @Override
    public String createOrder(Order order) {
        return "";
    }

    @Override
    public Order getOrderByUserIdAndDate(Long id, Date startDate, Date endDate) {
        return null;
    }

    @Override
    public List<Order> getAllOrders() {
        return List.of();
    }

    @Override
    public List<Order> getAllOrdersFilteredByDate(Date startDate, Date endDate) {
        return List.of();
    }
}
