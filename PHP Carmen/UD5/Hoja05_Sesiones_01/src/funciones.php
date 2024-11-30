<?php
    function validarDni(string $dni): bool {
        // Tabla de letras de validación
        $letrasValidas = "TRWAGMYFPDXBNJZSQVHLCKE";
        
        // Comprobar formato básico (8 números y 1 letra)
        if (!preg_match('/^[0-9]{8}[A-Z]$/', $dni)) {
            return false;
        }
        
        // Separar la parte numérica y la letra
        $numero = intval(substr($dni, 0, 8)); // Los 8 dígitos
        $letra = substr($dni, -1);           // La última letra
        
        // Calcular la letra según el módulo 23
        $letraCalculada = $letrasValidas[$numero % 23];
        
        // Comparar la letra calculada con la proporcionada
        return $letra === $letraCalculada;
    }
?>