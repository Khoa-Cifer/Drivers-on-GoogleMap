package com.cifer.app.backend.service;

import com.cifer.app.backend.exception.IllegalPositionException;
import com.cifer.app.backend.model.Location;
import com.cifer.app.backend.model.Log;
import com.cifer.app.backend.model.User;
import com.cifer.app.backend.repository.LocationRepository;
import com.cifer.app.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class LocationServiceImpl implements LocationService {
    private final LocationRepository locationRepository;
    private final UserRepository userRepository;

    @Override
    public String createLocation(Location location, String email) {
        if (location.getLatitude() == locationRepository.findAllByLatitude()
            && location.getLongitude() == locationRepository.findAllByLongitude()) {
            throw new IllegalPositionException("People cannot have the same position");
        }

        Optional<User> user = userRepository.findByEmail(email);
        user.get().setLocation(location);
        return "Create location successfully";
    }

    @Override
    public String updateLocationByUserEmail(String email, Location newLocation) {
        return "";
    }

    @Override
    public String deleteLocation(Log log, String status) {
        if (status.equalsIgnoreCase("Completed")) {
            Optional<User> customer = userRepository.findByEmail(log.getDriver().getEmail());
            Optional<User> driver = userRepository.findByEmail(log.getOrder().getEmail());
            customer.get().setLocation(null);
            driver.get().setLocation(null);
            userRepository.save(customer.get());
            userRepository.save(driver.get());
            return "Delete after transmission successfully";
        }
        return "Cannot delete, driver is working and customer is waiting";
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
