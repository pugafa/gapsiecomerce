package com.gapsi.providers.seguridad;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetailsService;

@Configuration
public class JwtConfig {


    @Autowired
    private UserDetailsService userDetailsService;

    @Value("${jwt.secret}")
    private String jwtSecret;


    @Bean
    public SignatureAlgorithm jwtAlgorithm() {
        return SignatureAlgorithm.HS256;
    }

    @Bean
    public String jwtSecret() {
        return jwtSecret;
    }
}