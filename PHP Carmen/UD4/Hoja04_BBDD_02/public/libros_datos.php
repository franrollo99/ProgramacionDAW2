<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Datos libros</title>
</head>
<body>

    <?php
        require_once "../vendor/autoload.php";
        use Src\funcionesBD;

        $libros = funcionesBD::getDatosLibros();

        if(count($libros)>0){
            echo "<table border='1'>";
            echo "<tr><th>NUMERO DE EJEMPLAR</th><th>TITULO</th><th>AÑO DE EDICION</th><th>PRECIO</th><th>FECHA DE ADQUISICION</th></tr>";
            foreach($libros as $libro){
                echo "<tr><td>{$libro['numero_ejemplar']}</td><td>{$libro['titulo']}</td><td>{$libro['anyo_edicion']}</td><td>{$libro['precio']}</td><td>{$libro['fecha_adquisicion']}</td></tr>";
            }
            echo "</table>";
        }
    ?>

    <br>
    <a href="libros.php">Volver</a>

</body>
</html>