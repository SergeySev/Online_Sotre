package com.example.fb_project.config;

import com.example.fb_project.entity.ChangeLog;
import com.example.fb_project.repository.ChangeLogRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDateTime;

@Configuration
public class DataConfig {

    @Bean
    CommandLineRunner commandLineRunner(ChangeLogRepository changeLogRepository) {

        return args -> {
            if (changeLogRepository.findByIsStarted(true).isPresent())
                System.out.println("The app been already started. v 1.1");
            else {
                ChangeLog changeLog = new ChangeLog();
                changeLog.setIsStarted(true);
                changeLog.setCreatedAt(LocalDateTime.now());

                changeLogRepository.save(changeLog);
                System.out.println("The app been already started. v 1.1");
            }
        };
    }

}
