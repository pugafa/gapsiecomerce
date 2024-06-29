package com.gapsi.providers.service.impl;

import com.gapsi.providers.models.Proveedor;
import org.springframework.stereotype.Component;
import java.util.Map;

@Component
public class ProveedorNombreUnicoRule implements ProveedorValidationRule {

    private final Map<Integer, Proveedor> proveedores;

    public ProveedorNombreUnicoRule(Map<Integer, Proveedor> proveedores) {
        this.proveedores = proveedores;
    }

    @Override
    public boolean validate(Proveedor proveedor) {
        return proveedores.values().stream()
                .noneMatch(p -> p.getNombre().equalsIgnoreCase(proveedor.getNombre()));
    }
}
