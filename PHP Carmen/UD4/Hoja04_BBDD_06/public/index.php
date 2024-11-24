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
    <form method="post" enctype="multipart/form-data">
    <input type="text" name="nombreProducto" placeholder="Nombre de producto" required>
    <br><br>
    <input type="file" name="imagenProducto" value="Examinar..." required>
    <br><br>
    <input type="number" name="precio" step="0.01" min="0.01" placeholder="Precio" required>
    <br><br>
    <textarea name="descripcionProducto" placeholder="Descripcion..." required></textarea>
    <br><br>
    <input type="submit" name="enviar" value="Enviar">
    </form>
</body>
</html>