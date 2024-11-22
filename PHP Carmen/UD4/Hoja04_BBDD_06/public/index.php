<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta de productos</title>
    <link rel="stylesheet" href="../style/estilo.css">
</head>
<body>
    <h1>Alta de Productos</h1>
    <form method="post">
    <input type="text" name="nombreProducto" placeholder="Nombre de producto">
    <br><br>
    <input type="file" name="imagenProducto" value="Examinar...">
    <br><br>
    <input type="number" step="0.01" placeholder="0.00">
    <br><br>
    <textarea name="descripcionProducto" placeholder="Descripcion..."></textarea>
    <br><br>
    <input type="submit" name="enviar" value="Enviar">
    </form>
</body>
</html>