package com.gapsi.providers.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HolaController {
    //Este servicio solo sirve para validar que la apliccación esté levantada correctamente
    @PostMapping("/saludo")
    public String holaMundo() {
        return "Bienvenido esta es la api de gapsi Candidato 01";
    }
    @GetMapping("/version")
    public String version() {
        return "Version 1.0";
    }
}
