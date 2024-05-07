package com.cifer.app.backend.request;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LocationRequest {
    @NotBlank
    private double latitude;
    @NotBlank
    private double longitude;
}
