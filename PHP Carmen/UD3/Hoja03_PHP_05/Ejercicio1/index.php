<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    include_once 'Clases/empleado.php';
    include_once 'Clases/encargado.php';

    $empleado=new Empleado(1500);
    echo "El sueldo de un empleado normal es de " . $empleado->getSueldo() . "€<br>";

    $encargado=new Encargado(1500);
    echo "El sueldo del encargado es de " . $encargado->getSueldo() . "€";
?>

</body>
</html>