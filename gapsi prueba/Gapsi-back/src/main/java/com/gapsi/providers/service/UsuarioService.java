package com.gapsi.providers.service;


import com.gapsi.providers.repository.UsuarioRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private SignatureAlgorithm jwtAlgorithm;
    @Autowired
    private String jwtSecret;


    public String autenticarUsuario(String usuario, String contrasena) {
        boolean validado = usuarioRepository.validarContrasena(usuario, contrasena);
        if (validado) {
            String jwtToken = Jwts.builder()
                    .setSubject(usuario)
                    .setIssuedAt(Date.from(Instant.now()))
                    .setExpiration(Date.from(Instant.now().plusSeconds(3600)))
                    .signWith(jwtAlgorithm, jwtSecret)
                    .compact();
            return jwtToken;
        } else {
            return "400";
        }
    }


}
