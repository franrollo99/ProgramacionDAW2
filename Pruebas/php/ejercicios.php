<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    <?php
        $fecha1=new DateTime();
        $fecha2=new DateTime("05-10-1999");
        $diferencia=$fecha1->diff($fecha2);
        echo $diferencia->days;
    ?>
</body>
</html>