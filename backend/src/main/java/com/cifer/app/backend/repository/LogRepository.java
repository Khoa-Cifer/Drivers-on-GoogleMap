package com.cifer.app.backend.repository;

import com.cifer.app.backend.model.Log;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogRepository extends JpaRepository<Log, Long> {
}
