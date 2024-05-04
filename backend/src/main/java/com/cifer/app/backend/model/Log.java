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
    private Date receiveDate;
    private String status;
    private boolean isFailed;
    
    @ManyToOne
    @JoinColumn(name = "order_id")
    private User order;

    @ManyToOne
    @JoinColumn(name = "shipper_id")
    private User shipper;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
