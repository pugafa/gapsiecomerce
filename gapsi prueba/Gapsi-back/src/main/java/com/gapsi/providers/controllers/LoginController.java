package com.gapsi.providers.controllers;

import com.gapsi.providers.service.UsuarioService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController
{
    @Autowired
    private UsuarioService usuarioService;
    @CrossOrigin(origins = "*.*")
    @PostMapping("/login")
    public String generateJwt(@RequestBody UsuarioLoginRequest request) {

        return usuarioService.autenticarUsuario(request.getUsuario(), request.getContrasena());
    }

    // Clase auxiliar para el cuerpo de la solicitud
    static class UsuarioLoginRequest {
        private String usuario;
        private String contrasena;

        public String getUsuario() {
            return usuario;
        }

        public void setUsuario(String usuario) {
            this.usuario = usuario;
        }

        public String getContrasena() {
            return contrasena;
        }

        public void setContrasena(String contrasena) {
            this.contrasena = contrasena;
        }
    }
}
