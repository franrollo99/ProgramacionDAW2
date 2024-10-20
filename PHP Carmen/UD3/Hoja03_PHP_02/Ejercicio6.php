<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    $dia=5;
    $mes=10;
    $año=1999;

    function comprobarFecha($dia, $mes, $año){
        if(checkdate($mes, $dia, $año)){
            return "La fecha $dia-$mes-$año es correcta";
        }else{
            return "La fecha $dia-$mes-$año no es correcta";
        }
    }

    echo comprobarFecha($dia, $mes, $año);
?>

</body>
</html>