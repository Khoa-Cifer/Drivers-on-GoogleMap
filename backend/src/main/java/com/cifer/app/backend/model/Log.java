package com.cifer.app.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Table(name = "Logs")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Log {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "log_id")
    private Long id;
    private Date orderDate;
    private Date receiveDate = null;
    private String status;
    private Integer deliveredQuantity;
    private Integer succeededDeliveredQuantity = deliveredQuantity;
    private boolean isFailed = false;

    public Log(Date orderDate, Integer deliveredQuantity, User order, User driver, Product product) {
        this.orderDate = orderDate;
        this.deliveredQuantity = deliveredQuantity;
        this.order = order;
        this.driver = driver;
        this.product = product;
    }

    @ManyToOne
    @JoinColumn(name = "order_id")
    private User order;

    @ManyToOne
    @JoinColumn(name = "shipper_id")
    private User driver;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
