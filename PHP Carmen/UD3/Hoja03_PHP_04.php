<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 04</h1>

    <h3>Ejercicio 1</h3>
    <?php
        include 'Hoja03_PHP_04Funciones.php';

        //Crear un objeto de la clase circulo
        $circulo=new Circulo(9);
        echo "El radio del circulo es: " . $circulo->getRadio() . "<br>";

        $circulo->setRadio(15);
        echo "El radio del circulo es: " . $circulo->getRadio();
    ?>

    <br><br><br>
    
    <h3>Ejercicio 2</h3>
    <?php
        
    ?>

    <br><br><br>
    
    <h3>Ejercicio 3</h3>
    <?php

    ?>

    <br><br><br>
</body>
</html>