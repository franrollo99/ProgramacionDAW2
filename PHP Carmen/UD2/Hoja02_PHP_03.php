<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios hoja 03</h1>
    
    <h2>Ejercicio 1</h2>
    <?php
        echo date("d-m-Y") . "<br>";
        echo date("d F Y") . "<br>";
    ?>

    <br><br>
    
    <h2>Ejercicio 2</h2>
    <?php
        $fecha=new DateTime();
        $fecha->modify('-50 days');
        echo $fecha->format('d-m-Y');
    ?>

    <br><br>
    
    <h2>Ejercicio 3</h2>
    <?php
        $dia=24;
        $mes=9;
        $año=2024;

        if(checkdate($mes,$dia, $año)){
            echo "La fecha $dia/$mes/$año es valida";
        }else{
            echo "La fecha $dia/$mes/$año no es valida";
        }
    ?>

    <br><br>
    
    <h2>Ejercicio 4</h2>
    <?php
        $fecha1=new DateTime('2024-09-24');
        $fecha2=new DateTime('2024-07-21');

        $diferencia=$fecha1->diff($fecha2);

        echo "La diferencia entre las fechas es de " . $diferencia->days . " dias";

    ?>

    <br><br>
    
    <h2>Ejercicio 5</h2>
    <?php
        $fecha=new DateTime();
        $fecha->modify('+400 hours');

        echo "La fecha nueva es: " . $fecha->format('d-m-Y H:i:s');
    ?>

    <br><br>
    
    <h2>Ejercicio 6</h2>
    <?php
        $a=8;
        $b=3;
        $c=5;

        echo "El valor $a es igual a $b? " . ($a == $b ? 'true' : 'false') . "<br>";
        echo "El valor $a es diferente a $b? " . ($a != $b ? 'true' : 'false') . "<br>";
        echo "El valor $a es menor que $b? " . ($a < $b ? 'true' : 'false') . "<br>";
        echo "El valor $a es mayor que $b? " . ($a >$b ? 'true' : 'false') . "<br>";
        echo "El valor $a es mayor o igual que $b? " . ($a >= $b ? 'true' : 'false') . "<br>";
        echo "El valor $a es menor o igual que $b? " . ($a <= $b ? 'true' : 'false') . "<br>";
    ?>

    <br><br>
    
    <h2>Ejercicio 7</h2>
    <?php
        $a=8;
        $b=3;
        $c=5;

        echo "El valor $a es igual a $b y $c es mayor que $b? " . (($a == $b) && ($c > $b) ? 'true' : 'false') . "<br>";
        echo "El valor $a es igual a $b o $b es igual a $c? " . (($a == $b) || ($b == $c)  ? 'true' : 'false') . "<br>";
        echo "El valor $a es menor o igual que $b? " . (($b <= $c) ? 'true' : 'false') . "<br>";
    ?>

    <br><br>
    
</body>
</html>