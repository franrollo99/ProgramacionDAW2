<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guardar libros</title>
</head>
<body>

    <?php
        require_once "../vendor/autoload.php";
        use Src\funcionesBD;

        if (isset($_POST['guardar'])){
            $titulo=$_POST['titulo'];
            $añoEdicion=$_POST['añoEdicion'];
            $precio=$_POST['precio'];
            $fechaAdquisicion=$_POST['fechaAdquisicion'];

            echo(funcionesBD::guardarDatos($titulo, $añoEdicion, $precio, $fechaAdquisicion));
        }

    ?>

    <br>
    <a href="libros.php">Volver</a>

</body>
</html>