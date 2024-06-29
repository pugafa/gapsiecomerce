package com.gapsi.providers.controllers;

import com.gapsi.providers.models.Proveedor;
import com.gapsi.providers.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "*	")
@RestController
@RequestMapping("/api/proveedores")
public class ProveedorController {

    @Autowired
    private ProveedorService proveedorService;

    //Para obtener todos los proveedores
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<Proveedor>> getAllProveedores() {
        return ResponseEntity.ok(proveedorService.getAllProveedores());
    }
    @CrossOrigin(origins = "http://localhost:3000")
    // Obtener todos los proveedores con paginación
    @GetMapping("/lista")
    public ResponseEntity<Map<String, Object>> getAllProveedoresList(
            @RequestParam(required = false) Integer limit,
            @RequestParam(required = false) Integer offset) {

        int defaultLimit = 10;  // Límite por defecto si no se proporciona
        int defaultOffset = 0;   // Offset por defecto si no se proporciona

        if (limit == null) {
            limit = defaultLimit;
        }
        if (offset == null) {
            offset = defaultOffset;
        }

        List<Proveedor> proveedores = proveedorService.getAllProveedoresList(limit, offset);
        int totalProveedores = proveedorService.countProveedores();

        Map<String, Object> response = new HashMap<>();
        response.put("total", totalProveedores);
        response.put("proveedores", proveedores);

        return ResponseEntity.ok(response);
    }
    

    @CrossOrigin(origins = "http://localhost:3000")
    //Para obtener un solo proveedor
    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> getProveedor(@PathVariable int id) {
        Proveedor proveedor = proveedorService.getProveedor(id);
        if (proveedor != null) {
            return ResponseEntity.ok(proveedor);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @CrossOrigin(origins = "http://localhost:3000")
    //Para agregar proveedores
    @PostMapping
    public ResponseEntity<String> addProveedor(@RequestBody Proveedor proveedor) {
        ResponseEntity<String> response = proveedorService.addProveedor(proveedor);
        return response;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    //Para actualizar un proveedor
    @PutMapping("/{id}")
    public ResponseEntity<Proveedor> updateProveedor(@PathVariable int id, @RequestBody Proveedor proveedor) {
        Proveedor proveedorActualizado = proveedorService.updateProveedor(id, proveedor);
        return ResponseEntity.ok(proveedorActualizado);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    //Para eliminar un proveedor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProveedor(@PathVariable int id) {
        proveedorService.deleteProveedor(id);
        return ResponseEntity.noContent().build();
    }
}
