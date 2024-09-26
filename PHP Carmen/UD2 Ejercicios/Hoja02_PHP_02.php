<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios hoja 02</h1>
    
    <h2>Ejercicio 1</h2>
    <?php
        echo "Este es el resultado correcto del primer ejercicio";
    ?>

    <br><br>

    <h2>Ejercicio 2</h2>
    <?php
        echo "Segundo ejercicio: visualizacion del contenido de variables <br>";
        //nombre almacena un String
        $nombre="Fran";
        //edad almacena un numero entero
        $edad=24;

        print "Mi nombre es $nombre y mi edad es $edad";
    ?>

    <br><br>

    <h2>Ejercicio 3</h2>
    <?php
        $operador1=13;
        $operador2=4;

        $resultado=$operador1-$operador2;
        print "El resultado de $operador1-$operador2 es $resultado<br>";

        $resultado=$operador1+$operador2;
        print "El resultado de $operador1+$operador2 es $resultado<br>";

        $resultado=$operador1*$operador2;
        print "El resultado de $operador1*$operador2 es $resultado<br>";

        $resultado=$operador1/$operador2;
        print "El resultado de $operador1/$operador2 es $resultado<br>";

        $resultado=$operador1%$operador2;
        print "El resultado de $operador1%$operador2 es $resultado<br>";
    ?>

    <br><br>

    <h2>Ejercicio 4</h2>
    <?php
        $nombre="Juan";
        print "Informacion de la variable ''nombre'': ";
        var_dump($nombre);
        print "<br>Contenido de la variable: $nombre <br>";

        $nombre=null;
        print "Despues de asignarle un valor nulo: ";
        var_dump($nombre)
    ?>

<br><br>

<h2>Ejercicio 5</h2>
<?php
    $temporal="juan";
    echo "$temporal es " . gettype($temporal) . "<br>";
    $temporal=3.14;
    echo "$temporal es " . gettype($temporal) . "<br>";
    $temporal=false;
    var_dump($temporal);
    echo " es " . gettype($temporal) . "<br>";
    $temporal=3;
    echo "$temporal es " . gettype($temporal) . "<br>";
    $temporal=null;
    var_dump($temporal);
    echo " es " . gettype($temporal) . "<br>";
?>

<br><br>

<h2>Ejercicio 6</h2>
<?php
    $numero1=5;
    $numero2=8;
    $numero3=4;
    $media=($numero1+$numero2+$numero3)/3;

    echo "La media entre " . $numero1 . ", " . $numero2 . " y " . $numero3 . " es: " . $media;

?>

<br><br>

<h2>Ejercicio 7</h2>
<?php
    $valor1=10;
    $valor2=20;

    echo "Valor 1 es " . $valor1 . "<br>";
    echo "Valor 2 es " . $valor2 . "<br>";

    $temporal=$valor1;
    $valor1=$valor2;
    $valor2=$temporal;

    echo "Ahora el valor 1 es " . $valor1 . "<br>";
    echo "Ahora el valor 2 es " . $valor2;
?>

<br><br>

<h2>Ejercicio 8</h2>
<?php
    $v10=10;
    $v5=5;
    $v1=1;
    $total=67;

    //Calcular billetes de 10
    $billete10=intdiv($total,$v10);
    $total=$total%$v10;

    //Calcular billetes de 5
    $billete5=intdiv($total,$v5);
    $total=$total%$v5;

    $moneda1=$total;


    echo "El desglose de 67€ en billetes de 10, 5 y 1€ es el siguiente: nº de billetes de 10 es " . $billete10 . ", nº billetes de 5 es " . $billete5 . ", nº monedas de 1 es " . $moneda1;
?>
</body>
</html>