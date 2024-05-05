package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Location;

import java.util.Date;
import java.util.List;

public class LocationServiceImpl implements LocationService{
    @Override
    public String createLocation(Location location) {
        return "";
    }

    @Override
    public String updateLocationByUserEmail(String email, Location newLocation) {
        return "";
    }

    @Override
    public String deleteLocation(String status) {
        return "";
    }

    @Override
    public Location getLocationByUserId(Long id, Date startDate, Date endDate) {
        return null;
    }

    @Override
    public List<Location> getAllLocations(Date startDate, Date endDate) {
        return List.of();
    }

}
