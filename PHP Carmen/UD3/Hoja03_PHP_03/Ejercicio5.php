<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

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

</body>
</html>