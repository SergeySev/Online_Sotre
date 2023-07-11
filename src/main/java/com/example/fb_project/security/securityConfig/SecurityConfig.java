package com.example.fb_project.security.securityConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    protected SecurityFilterChain configuration(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.
                authorizeHttpRequests().
                requestMatchers("/**").
                permitAll().anyRequest().
                permitAll().and().
                csrf().disable();
        return httpSecurity.build();
    }
}

