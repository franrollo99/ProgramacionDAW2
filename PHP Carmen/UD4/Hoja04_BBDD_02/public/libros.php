<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Libros</title>
</head>
<body>

    <?php
        require_once "../vendor/autoload.php";
        use Src\funcionesBD;
    ?>

    <h1>Inserte los datos</h1>
    <hr>
    <form action="libros_guardar.php" method="post">
        <label>Titulo:* <input type="text" name="titulo" required></label>
        <br><br>
        <label>Año de edicion:* <input type="number" name="añoEdicion" required></label>
        <br><br>
        <label>Precio:* <input type="number" name="precio" step="0.01" required></label>
        <br><br>
        <label>Fecha de adquisicion:* <input type="date" name="fechaAdquisicion" required></label>
        <br><br>
        <input type="submit" name="guardar" value="Guardar datos del libro">
    </form>

    <hr>
    <a href="libros_datos.php">Mostrar los libros guardados</a>

</body>
</html>