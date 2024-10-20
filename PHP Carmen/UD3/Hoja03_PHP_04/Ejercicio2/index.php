<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    include_once 'claseCoche.php';

    $coche=new Coche("6469FMT", 90);

    $coche->mostrarInfo();
    
    $coche->acelera(20);
    echo "<br>El coche ha acelerado a " . $coche->getVelocidad() . "km/h <br>";

    $coche->frena(100);
    echo "El coche ha frenado hasta los " . $coche->getVelocidad() . "km/h <br>";

    //Freno mas alla del limite
    $coche->frena(120);
    echo "El coche ha frenado hasta los " . $coche->getVelocidad() . "km/h. Se ha detenido";
?>

</body>
</html>