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
            ["codigo"=>"001", "descripcion"=>"lapiz", "existencias"=>150],
            ["codigo"=>"002", "descripcion"=>"boli", "existencias"=>200],
            ["codigo"=>"003", "descripcion"=>"goma", "existencias"=>100],
            ["codigo"=>"004", "descripcion"=>"cuaderno", "existencias"=>50],
            ["codigo"=>"005", "descripcion"=>"calculadora", "existencias"=>300]
        ];

        function mayor($articulos){
            $articuloMasExistencias=NULL;
            $maxExistencias=0;

            foreach($articulos as $articulo){
                if($articulo["existencias"]>$maxExistencias){
                    $maxExistencias=$articulo["existencias"];
                    $articuloMasExistencias=$articulo["descripcion"];
                }
            }

            return $articuloMasExistencias;
        }

        function sumar($articulos){
            $existenciasTotales=0;

            foreach($articulos as $articulo){
                $existenciasTotales+=$articulo["existencias"];
            }

            return $existenciasTotales;
        }

        function mostrar($articulos){
            foreach($articulos as $articulo){
                echo "Codigo: " .  $articulo["codigo"] . ", Descripcion: " . $articulo["descripcion"] . ", Existencias: " . $articulo["existencias"] . "<br>";
            }
        }

        echo "El articulo con mas existencias es el/la " . mayor($articulos) . "<br>";
        echo "La suma de todas las existencias es " . sumar($articulos) . "<br><br>";
        echo "Este es el contenido del array articulos: <br>";
        mostrar($articulos);


    ?>

    <br><br><br>

    <h2>Ejercicio 6</h2>
    <?php
        $verbos=["andar", "comer", "vivir", "amar", "beber", "escribir"];
        $verbo=$verbos[array_rand($verbos)]; //Elegimos un verbo al azar

        function conjugarPresente($verbo){
            $terminacion=substr($verbo, -2); //Con la funcion "substr" extraemos una parte de una cadena de texto. Con un valor negativo empezamos desde el final y sacamos los ultimos 2 caracteres de los verbos -ar, -er, -ir
            $raiz=substr($verbo, 0, -2); //Saco la raiz sin la terminacion

            if($terminacion == "ar"){
                return[
                    "Yo " . $raiz . "o",
                    "Tu " . $raiz . "as",
                    "El " . $raiz . "a",
                    "Nosotros " . $raiz . "amos",
                    "Vosotros " . $raiz . "ais",
                    "Ellos " . $raiz . "an"
                ];
            }elseif ($terminacion == "er") {
                return[
                    "Yo " . $raiz . "o",
                    "Tu " . $raiz . "es",
                    "El " . $raiz . "e",
                    "Nosotros " . $raiz . "emos",
                    "Vosotros " . $raiz . "eis",
                    "Ellos " . $raiz . "en"
                ];
                
            }elseif ($terminacion == "ir") {
                return[
                    "Yo " . $raiz . "o",
                    "Tu " . $raiz . "es",
                    "El " . $raiz . "e",
                    "Nosotros " . $raiz . "imos",
                    "Vosotros " . $raiz . "is",
                    "Ellos " . $raiz . "en"
                ];
            }
        }

        $conjugacion=conjugarPresente($verbo);

        echo "La conjugacion del presente de indicativo del verbo $verbo es: <br>";
        foreach($conjugacion as $verboConjugado){
            echo "$verboConjugado<br>";
        }
    ?>
</body>
</html>