<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    function letraDni($nif){
        $letras = "TRWAGMYFPDXBNJZSQVHLCKE"; //Creo un String con todas las letras en orden (array de caracteres)
        $resto = $nif%23;
        $letra = $letras[$resto];
        return $nif . $letra;
    }

    echo "El DNI es: " . letraDni(72196943);
?>

</body>
</html>