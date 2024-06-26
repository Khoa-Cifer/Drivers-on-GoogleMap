package com.cifer.app.backend.repository;

import com.cifer.app.backend.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String role);

    @Query("SELECT r FROM Role r")
    Optional<List<String>> findAllName();
}
