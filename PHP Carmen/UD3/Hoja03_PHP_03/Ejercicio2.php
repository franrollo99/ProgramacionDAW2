<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    function desgloseDinero($cantidad){
        //Creacion de array asociativo clave valor
        $dinero=array(
            500 => "Billetes de 500€",
            200 => "Billetes de 200€",
            100 => "Billetes de 100€",
            50 => "Billetes de 50€",
            20 => "Billetes de 20€",
            10 => "Billetes de 10€",
            5 => "Billetes de 5€",
            2 => "Monedas de 2€",
            1 => "Mondeas de 1€"
        );

        //Recorremos todos los valores de un array
        foreach ($dinero as $valor => $descripcion) {
            if ($cantidad >= $valor) {
                $cantidadDinero = floor($cantidad / $valor); // Calculamos cuántas monedas/billetes se necesitan
                $resultado[$descripcion] = $cantidadDinero; // Guardamos el resultado en un nuevo array
                $cantidad -= $cantidadDinero * $valor; // Reducimos la cantidad restante
            }
        }
    
        return $resultado;
    }
        
    // Mostramos el resultado
    echo "Desglose de dinero:";
    foreach (desgloseDinero(1397) as $tipoBillete => $cantidad) {
        echo "<br> -$cantidad $tipoBillete";
    }
?>

</body>
</html>