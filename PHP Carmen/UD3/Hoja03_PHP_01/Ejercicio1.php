<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    // Establecer la configuración regional a español
    setlocale(LC_TIME, 'es');

    // Mostrar la fecha con el formato deseado
    echo ucfirst(strftime('%A, %e de %B de %Y'));
?>

<br>

<?php
    //Crear el objeto DateTime con la fecha actual
    $fecha = new DateTime();

    // Arrays para traducir días y meses al español
    $dias_semana = array('Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado');
    $meses = array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre');

    // Obtener el día de la semana y el mes
    $dia_semana = $dias_semana[$fecha->format('w')];
    $dia = $fecha->format('d');
    $mes = $meses[$fecha->format('n') - 1];
    $año = $fecha->format('Y');

    // Mostrar la fecha en el formato deseado
    echo "$dia_semana, $dia de $mes de $año";
?>

</body>
</html>