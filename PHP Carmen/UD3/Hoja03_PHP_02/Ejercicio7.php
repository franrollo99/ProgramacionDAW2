<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    // Función para validar una cuenta corriente
    function validarCuentaCorriente($cc) {
        // Eliminar posibles espacios y guiones
        $cc = str_replace(array(' ', '-'), '', $cc);
    
        // Verificar que la longitud de la cuenta es de 20 dígitos
        if (strlen($cc) !== 20) {
            return "La cuenta corriente no tiene 20 dígitos";
        }
    
        // Extraer las partes de la cuenta corriente
        $entidad = substr($cc, 0, 4);
        $oficina = substr($cc, 4, 4);
        $digitos_control = substr($cc, 8, 2);
        $cuenta = substr($cc, 10, 10);
    
        // Mostrar las partes extraídas
        echo "Código de la entidad: $entidad\n";
        echo "Código de la oficina: $oficina\n";
        echo "Dígitos de control: $digitos_control\n";
        echo "Número de cuenta: $cuenta\n";
    
        // Comprobar si los dígitos de control son correctos
        if (comprobarDigitosControl($entidad, $oficina, $cuenta, $digitos_control)) {
            echo "Los dígitos de control son correctos.\n";
        } else {
            echo "Los dígitos de control son incorrectos.\n";
        }
    }
    
    // Función para calcular los dígitos de control y compararlos con los proporcionados
    function comprobarDigitosControl($entidad, $oficina, $cuenta, $digitos_control) {
        // Módulo 11: pesos 1, 2, 4, 8, 5, 10, 9, 7, 3, 6
        $pesos = [1, 2, 4, 8, 5, 10, 9, 7, 3, 6];
    
        // Calcular el primer dígito de control (para entidad y oficina)
        $parte1 = "00" . $entidad . $oficina;
        $dc1 = calcularDigitoControl($parte1, $pesos);
    
        // Calcular el segundo dígito de control (para la cuenta)
        $dc2 = calcularDigitoControl($cuenta, $pesos);
    
        // Unir los dígitos calculados
        $digitos_calculados = $dc1 . $dc2;
    
        // Comparar con los dígitos proporcionados
        return $digitos_calculados === $digitos_control;
    }
    
    // Función para calcular un dígito de control con módulo 11
    function calcularDigitoControl($cadena, $pesos) {
        $suma = 0;
    
        // Sumar cada dígito multiplicado por su peso
        for ($i = 0; $i < strlen($cadena); $i++) {
            $suma += intval($cadena[$i]) * $pesos[$i];
        }
    
        // Calcular el resto
        $resto = 11 - ($suma % 11);
    
        // Ajustar si el resto es 10 o 11
        if ($resto == 11) {
            return 0;
        } elseif ($resto == 10) {
            return 1;
        }
    
        return $resto;
    }
    
    // Ejemplo de cuenta corriente
    $cuentaCorriente = "1234-5678-12-1234567890"; // Reemplazar con la cuenta que quieras validar
    validarCuentaCorriente($cuentaCorriente);
    ?>
    
?>

</body>
</html>