<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

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