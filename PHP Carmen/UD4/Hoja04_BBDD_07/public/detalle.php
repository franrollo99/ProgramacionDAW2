<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle del producto</title>
    <link rel="stylesheet" href="../style/estiloDetalle.css">
</head>
<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\conexionBD;
    use Src\PDOCrearProducto;
    ?>

    <h1>Detalle del producto</h1>
    <fieldset>
        <?php
        if (isset($_GET['id'])) {
            $id = $_GET['id'];

            $conexion = ConexionBD::getConexion();
            $repositorioProducto = new PDOCrearProducto($conexion);
            $producto = $repositorioProducto->obtenerProducto($id);

            if($producto){
                echo "<p><strong>Nombre: </strong>{$producto['nombre']}</p>";
                echo "<p><strong>Precio: </strong>{$producto['precio']}</p>";
                echo "<p><strong>Descripcion: </strong>{$producto['descripcion']}</p>";
                echo "<img src='productos/{$producto['imagen']}' alt='No se ha encontrado la imagen'>";
            }else{
                echo "<p>No se ha podido mostrar el producto</p>";
            }
        }
        ?>
        <br>
        <a href="index.php">Volver al listado</a>
    </fieldset>
</body>
</html>