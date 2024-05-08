package com.cifer.app.backend.response;

import java.util.List;

public class JwtResponse {
    private Long id;
    private String email;
    private String token;
    private String type = "Bearer";
    private String roles;

    public JwtResponse(Long id, String email, String token, String roles) {
        this.id = id;
        this.email = email;
        this.token = token;
        this.roles = roles;
    }
}
