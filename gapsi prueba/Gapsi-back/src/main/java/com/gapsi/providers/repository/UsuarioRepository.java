package com.gapsi.providers.repository;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gapsi.providers.models.Usuario;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Repository;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class UsuarioRepository {

    private final List<Usuario> usuarios = new ArrayList<>();

    @Value("${usu.file}")
    private String filePath;

    @PostConstruct
    public void init() {
        loadUsuarios();
    }

    public Usuario findByUsuario(String usuario) {
        return usuarios.stream()
                .filter(u -> u.getUsuario().equals(usuario))
                .findFirst()
                .orElse(null);
    }

    public boolean validarContrasena(String usuario, String contrasena) {
        Usuario usuarioEncontrado = findByUsuario(usuario);
        return usuarioEncontrado != null && usuarioEncontrado.getContrasena().equals(contrasena);
    }

    private void loadUsuarios() {
        try {
            File file = new File(filePath);
            if (file.exists()) {
                ObjectMapper objectMapper = new ObjectMapper();
                List<Usuario> loadedUsuarios = objectMapper.readValue(file, new TypeReference<List<Usuario>>() {});
                usuarios.addAll(loadedUsuarios);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
