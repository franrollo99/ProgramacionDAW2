<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    $capital=1000;
    $redito=0.05; //5%
    $tiempo=5; //Años

    function interesSimple($capital, $redito, $tiempo){
        return $capital*$redito*$tiempo;
    }

    function interesCompuesto($capital, $redito, $tiempo){
        return $capital*pow((1+$redito), $tiempo)-$capital;
    }

    $interesSimple = interesSimple($capital, $redito, $tiempo);
    $interesCompuesto = interesCompuesto($capital, $redito, $tiempo);

    echo "Interés Simple: " . number_format($interesSimple, 2) . "€<br>";
    echo "Interés Compuesto: " . number_format($interesCompuesto, 2) . "€<br>";

    if ($interesSimple > $interesCompuesto) {
        echo "El interés simple es más beneficioso.<br>";
    } else if ($interesCompuesto > $interesSimple) {
        echo "El interés compuesto es más beneficioso.<br>";
    } else {
        echo "Ambos intereses son iguales.<br>";
    }
?>

</body>
</html>