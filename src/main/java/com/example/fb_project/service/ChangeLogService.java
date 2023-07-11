package com.example.fb_project.service;

import com.example.fb_project.entity.ChangeLog;
import com.example.fb_project.repository.ChangeLogRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ChangeLogService {

    private final ChangeLogRepository changeLogRepository;

    public boolean isStart() {
        return changeLogRepository.findByIsStarted(true).isPresent();
    }

    public boolean addUpdate() {
        ChangeLog changeLog = changeLogRepository.
                findByIsStarted(true).
                orElseThrow(() -> new IllegalStateException("The app has already been updated"));

        changeLog.setIsUpdated(true);
        changeLog.setUpdatedAt(LocalDateTime.now());

        changeLogRepository.save(changeLog);
        return true;
    }

    public boolean isUpdate() {
        return changeLogRepository.findByIsUpdated(true).isPresent();
    }

    public boolean deleteChangeLog() {
        changeLogRepository.deleteAll();
        return true;
    }
}
