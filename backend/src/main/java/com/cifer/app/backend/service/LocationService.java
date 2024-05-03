package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Location;

import java.util.Date;
import java.util.List;

public interface LocationService {
    String createLocation(Location location); //create location when a driver is active or user order a service.

    String updateLocation(Location currentLocation, Location newLocation); //update driver or user's location

    String deleteLocation(String status); //delete location after service complete

    Location getLocationByUserId(Long id, Date startDate, Date endDate); //get current location of login user

    List<Location> getAllLocations(Date startDate, Date endDate); //get all customers, drivers's locations, used by admin
}
