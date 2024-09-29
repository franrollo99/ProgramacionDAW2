<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 02</h1>

    <h2>Ejercicio 1</h2>
    <?php
        setlocale(LC_TIME, 'es');
        $fecha=strftime("%A, %e de %B de %Y");
        echo ucfirst($fecha);
    ?>

    <br><br><br>
</body>
</html>