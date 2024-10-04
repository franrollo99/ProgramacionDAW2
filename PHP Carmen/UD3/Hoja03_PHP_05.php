<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 05</h1>

    <h3>Ejercicio 1</h3>
    <?php
        include 'Hoja03_PHP_05Funciones.php';

        $empleado=new Empleado(1500);
        echo "El sueldo de un empleado normal es de " . $empleado->getSueldo() . "€<br>";

        $encargado=new Encargado(1500);
        echo "El sueldo del encargado es de " . $encargado->getSueldo() . "€";
    ?>

    <br><br><br>

    <h3>Ejercicio 2</h3>
    <?php
        $cuenta=new Cuenta(12345, "Fran", 12000);
        $cuenta->mostrar();

        $cuentaCorriente=new cuentaCorriente(54321, "Maria", 2000, 50);
        $cuentaCorriente->mostrar();
        $cuentaCorriente->reintegro(500);

        $cuentaAhorro=new CuentaAhorro(98776, "Marcelo", 5000, 30, 3);
        $cuentaAhorro->mostrar();
        $cuentaAhorro->aplicaInteres();
        $cuentaAhorro->mostrar();
    ?>

    <br><br><br>

    <h3>Ejercicio 3</h3>
    <?php

    ?>

    <br><br><br>

    <h3>Ejercicio 4</h3>
    <?php

    ?>

    <br><br><br>
</body>
</html>