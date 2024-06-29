package com.gapsi.providers.service.impl;

import com.gapsi.providers.models.Proveedor;

    @FunctionalInterface
    public interface ProveedorValidationRule {
        boolean validate(Proveedor proveedor);
    }
