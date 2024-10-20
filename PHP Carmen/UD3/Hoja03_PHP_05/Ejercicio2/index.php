<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    include_once 'Clases/cuentaAhorro.php';
    include_once 'Clases/cuentaCorriente.php';

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

</body>
</html>