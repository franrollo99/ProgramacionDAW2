<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    $n1=121;
    $n2=120;

    //convierto los numeros a string
    $n1String=strval($n1);
    $n2String=strval($n2);

    //invertimos la cadena
    $n1Invertido=strrev($n1String);
    $n2Invertido=strrev($n2String);

    //comparamos la cadena con la cadena invertida
    if($n1String==$n1Invertido){
        echo "$n1 es capicua <br>";
    }else{
        echo "$n1 no es capicua <br>";
    }

    if($n2String==$n2Invertido){
        echo "$n2 es capicua";
    }else{
        echo "$n2 no es capicua";
    }
?>

</body>
</html>