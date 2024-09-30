<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 03</h1>

    <h2>Ejercicio 1</h2>
    <?php
        function cargarArray($inicio, $fin)

        $array1=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        $array2=[11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        $resultado=array_merge($array1, $array2);
        for($i=0; $i<count($resultado); $i++){
            echo "$resultado[$i] ";
        }

        echo "<br>";


    ?>

    <br><br><br>

    <h2>Ejercicio 2</h2>
    <?php
        $total=1379;
        $dinero=[
            500=>"Billete de 500",
            200=>"Billete de 200",
            100=>"Billete de 100",
            50=>"Billete de 50",
            20=>"Billete de 20",
            10=>"Billete de 10",
            5=>"Billete de 5",
            2=>"Moneda de 2",
            1=>"Mondea de 1"
        ];

        echo $dinero[500];

    ?>

    <br><br><br>

    <h2>Ejercicio 3</h2>
    <?php

    ?>

    <br><br><br>

    <h2>Ejercicio 4</h2>
    <?php

    ?>

    <br><br><br>

    <h2>Ejercicio 5</h2>
    <?php

    ?>

    <br><br><br>

    <h2>Ejercicio 6</h2>
    <?php

    ?>
</body>
</html>