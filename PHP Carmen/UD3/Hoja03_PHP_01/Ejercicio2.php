<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    $resultado=0;

    //bucle for y sumo el valor a resultado si el resto del numero entre 2 es 0
    for($i=10; $i<=100; $i++){
        if($i%2==0){
            $resultado+=$i;
        }
    }

    echo "La suma de los pares desde 10 hasta 100 es $resultado";
?>

<br>

<?php
    $suma=0;

        //bucle que aumenta en 2 mientras se cumple la condicion
        for($i=10; $i<=100; $i+=2){
            $suma=$suma+$i;
        }

        echo "El resultado final es $suma";
?>

</body>
</html>