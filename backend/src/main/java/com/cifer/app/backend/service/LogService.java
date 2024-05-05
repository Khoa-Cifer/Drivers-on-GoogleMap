package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Log;

import java.util.List;

public interface LogService {
    String createLog(Log log, String productName); //create the log when customer order pharmacy

    String updateLog(Long id, Log newLog); //update the log when there's some event

    String deleteLog(Long logId); //delete the log

    List<Log> getAllLogsBasedOnUser(Long userId); //get logs based on user, user can be driver or customer

    Log getLog(Long logId);

    List<Log> getAllLogs(); //administrator's command
}
