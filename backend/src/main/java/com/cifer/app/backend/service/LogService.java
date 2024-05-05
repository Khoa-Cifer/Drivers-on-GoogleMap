package com.cifer.app.backend.service;

import com.cifer.app.backend.model.Log;

public interface LogService {
    String createLog(Log log); //create the log when customer order pharmacy

    String updateLog(Long id, Log newLog); //update the log when there's some event

    String deleteLog(Long logId); //delete the log

    String getAllLogsBasedOnUser(Long userId); //get logs based on user, user can be driver or customer

    String getLog(Long logId);

    String getAllLogs(); //administrator's command
}
