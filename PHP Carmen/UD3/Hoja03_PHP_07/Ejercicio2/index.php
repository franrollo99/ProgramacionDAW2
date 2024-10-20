<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

    <?php
        include_once 'Clases/empleado.php';

        $empleado = new Empleado(0);
        $empleado->actualizarInformacionPersonal("Juan Pérez", 30, "Calle Falsa 123");
        $empleado->actualizarInformacionLaboral("E001", 2500.00);

        echo $empleado->mostrarInformacionCompleta();
    ?>
    
</body>
</html>