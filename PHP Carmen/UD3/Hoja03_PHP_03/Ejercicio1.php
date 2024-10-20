<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    function cargarArray($inicio, $fin){
        $array=range($inicio, $fin);
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

</body>
</html>