<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    $numero=36.63;

    function capicua($numero){
        $numeroString=strval($numero);
        $numeroInvertido=strrev($numeroString);

        if($numeroString==$numeroInvertido){
            return "El numero $numero es capicua";
        }else{
            return "El numero $numero no es capicua";
        }

    }

    function redondeo($numero){
        return "El numero $numero redondeado es " . round($numero);
    }

    function digitos($numero){
        $digitosNum=strlen(strval($numero));
        //Comprobamos si es entero o no
        if(is_int($numero)){
            return "El numero $numero tiene " . $digitosNum . " digitos";
        }else{
            return "El numero $numero tiene " . $digitosNum-1 . " digitos";//Restamos 1 porque cuenta la coma de los decimales
        }
        
    }

    echo capicua($numero) . "<br>";
    echo redondeo($numero) . "<br>";
    echo digitos($numero);
?>

</body>
</html>