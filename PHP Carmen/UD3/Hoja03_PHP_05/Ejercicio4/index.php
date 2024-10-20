<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    include_once 'Clases/alimentacion.php';
    include_once 'Clases/electronica.php';

    $cestaCompra=[
        new Alimentacion(1, 23.29, "Platano", "3-12-2025"),
        new Alimentacion(2, 33.79, "Sandia", "4-1-2025"),
        new Alimentacion(3, 43.69, "Melon", "6-7-2025"),
        new Alimentacion(4, 3.99, "Manzana", "21-4-2025"),
        new Alimentacion(5, 4.29, "Pera", "15-6-2025"),
        new Electronica(6, 400.29, "PS4 Pro", "2 años"),
        new Electronica(7, 720.29, "PS5 Slim", "3 años"),
        new Electronica(8, 900.29, "PS5 Pro", "4 años"),
        new Electronica(9, 2259.29, "Ordenador Gaming", "5 años"),
        new Electronica(10, 1339.29, "Television 4k", "10 años")
    ];

    $precioAlimientos=0;
    $precioElectronica=0;

    echo "Cesta de la compra:<br>";

    foreach($cestaCompra as $producto){
        $producto->mostrarDatos();
        if($producto instanceof Alimentacion && $producto->getPrecio()){
            $precioAlimientos+=$producto->getPrecio();
        }else if($producto instanceof Electronica && $producto->getPrecio()){
            $precioElectronica+=$producto->getPrecio();
        }
    }

    echo "Se ha gastado un total de " . ($precioAlimientos+$precioElectronica) . "€<br>";
    echo "En alimentacion se ha gastado $precioAlimientos €<br>";
    echo "En electronica se ha gastado $precioElectronica €<br>";

?>

</body>
</html>