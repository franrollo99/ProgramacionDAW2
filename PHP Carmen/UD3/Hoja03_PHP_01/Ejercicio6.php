<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    $n1=0;
    $n2=1;

    echo "Los numeros de Fibonacci son: $n1, $n2, ";
    while($n1<999 || $n2<999){
        $suma=$n1+$n2;
        echo "$suma, ";
        if($n1<$n2){
            $n1=$suma;
        }else{
            $n2=$suma;
        }
    }
    echo "etc.";
?>
?>

</body>
</html>