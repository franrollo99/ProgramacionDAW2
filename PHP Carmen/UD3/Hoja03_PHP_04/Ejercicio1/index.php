<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    include_once 'claseCirculo.php';

    //Crear un objeto de la clase circulo
    $circulo=new Circulo(9);
    echo "El radio del circulo es: " . $circulo->getRadio() . "<br>";

    $circulo->setRadio(15);
    echo "El radio del circulo es: " . $circulo->getRadio();
?>

</body>
</html>