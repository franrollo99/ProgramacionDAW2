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
        $coche=new Coche("7479FLT", 90);

        $coche->mostrarInfo();
        
        $coche->acelera(20);
        echo "<br>El coche ha acelerado a " . $coche->getVelocidad() . "km/h <br>";

        $coche->frena(100);
        echo "El coche ha frenado hasta los " . $coche->getVelocidad() . "km/h <br>";

        //Freno mas alla del limite
        $coche->frena(120);
        echo "El coche ha frenado hasta los " . $coche->getVelocidad() . "km/h. Se ha detenido";


    ?>

    <br><br><br>
    
    <h3>Ejercicio 3</h3>
    <?php
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

    <br><br><br>
</body>
</html>