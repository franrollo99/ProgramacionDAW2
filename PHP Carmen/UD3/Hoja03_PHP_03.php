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
        function cargarArray($inicio, $fin){
            $array=range($inicio, $fin);
            /*
            $array=[];
            for($i=$inicio; $i<=$fin; $i++){
                $array[]=$i;
            }
            */
            return $array;
        }

        function ordenarArray($array){
            sort($array);
            return $array;
        }

        function mezclarArrays($array1, $array2){
            return array_merge($array1, $array2);
        }

        $array1=cargarArray(1, 10);
        $array2= cargarArray(20, 11);

        print_r($array1);
        echo "<br>";
        print_r($array2);

        echo "<br>";
        echo "Array ordenado: ";
        print_r(ordenarArray($array2));

        echo "<br>";

        echo "Array mezclado: ";
        print_r(mezclarArrays($array1, $array2));
    ?>

    <br><br><br>

    <h2>Ejercicio 2</h2>
    <?php
        
        function desgloseDinero($cantidad){
            //Creacion de array asociativo clave valor
            $dinero=array(
                500 => "Billetes de 500€",
                200 => "Billetes de 200€",
                100 => "Billetes de 100€",
                50 => "Billetes de 50€",
                20 => "Billetes de 20€",
                10 => "Billetes de 10€",
                5 => "Billetes de 5€",
                2 => "Monedas de 2€",
                1 => "Mondeas de 1€"
            );

            //Recorremos todos los valores de un array
            foreach ($dinero as $valor => $descripcion) {
                if ($cantidad >= $valor) {
                    $cantidadDinero = floor($cantidad / $valor); // Calculamos cuántas monedas/billetes se necesitan
                    $resultado[$descripcion] = $cantidadDinero; // Guardamos el resultado en un nuevo array
                    $cantidad -= $cantidadDinero * $valor; // Reducimos la cantidad restante
                }
            }
        
            return $resultado;
        }
            
        // Mostramos el resultado
        echo "Desglose de dinero:";
        foreach (desgloseDinero(1397) as $tipoBillete => $cantidad) {
            echo "<br> -$cantidad $tipoBillete";
        }
    

    ?>

    <br><br><br>

    <h2>Ejercicio 3</h2>
    <?php
        function letraDni($nif){
            $letras = "TRWAGMYFPDXBNJZSQVHLCKE"; //Creo un String con todas las letras en orden (array de caracteres)
            $resto = $nif%23;
            $letra = $letras[$resto];
            return $nif . $letra;
        }

        echo "El DNI es: " . letraDni(72196943);
    ?>

    <br><br><br>

    <h2>Ejercicio 4</h2>
    <?php
        echo "<table border='1'>";

        foreach($_SERVER as $nombre => $valor){
            echo "<tr><td>$nombre</td><td>$valor</td></tr>";
        }

        echo "</table>";
    ?>

    <br><br><br>

    <h2>Ejercicio 5</h2>
    <?php
        $articulos=[
            []
        ]
    ?>

    <br><br><br>

    <h2>Ejercicio 6</h2>
    <?php
        $verbos=["andar", "comer", "dormir"];
    ?>
</body>
</html>