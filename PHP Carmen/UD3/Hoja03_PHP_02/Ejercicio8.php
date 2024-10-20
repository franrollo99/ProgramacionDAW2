<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    $variable="Comer algas es realmente sano";

    $posicionAlgas=strpos($variable, "algas");
    echo "La palabra 'algas' esta en la posicion $posicionAlgas<br>";

    $reemplazoCadena=str_replace("realmente", "muy", $variable);
    echo "La cadena con el reemplazo es: $reemplazoCadena <br>";

    $comprobarAnacardo=strpos($variable, "anacardo");
    if($comprobarAnacardo){
        echo "La palabra 'anacardo' esta en la cadena <br>";
    }else{
        echo "La palabra 'anacardo' no esta en la cadena <br>";
    }

    $cadenaInvertida=strrev($variable);
    echo $cadenaInvertida . "<br>";

    $vocalesE=substr_count($variable, "e");
    echo "El numero de vocales 'e' que hay en la cadena es: $vocalesE";
?>

</body>
</html>