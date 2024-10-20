<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    include_once 'claseMonedero.php';

    $monederoFran=new Monedero();

    $monederoFran->meterDinero(10000);
    echo "Fran tiene en el monedero:" . $monederoFran->mostrarDinero() . "€ <br>";

    $monederoFran->sacarDinero(3000);
    echo "Fran tiene en el monedero:" . $monederoFran->mostrarDinero() . "€ <br>";

    $monederoPaco=new Monedero(); //Creamos un nuevo monedero

    echo "Hay un total de " . Monedero::cantidadMonederos() . " monederos <br>"; //Llamamos a la funcion estatica cantidadMonederos()

    unset($monederoPaco); //Destruimos un monedero

    echo "Hay un total de " . Monedero::cantidadMonederos() . " monederos";
?>

</body>
</html>