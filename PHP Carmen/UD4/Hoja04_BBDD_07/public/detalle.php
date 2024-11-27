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
    use Src\PDOCrearProducto;
    use Src\conexionBD;
    ?>

    <h1>Detalle del producto</h1>
    <fieldset>
        <?php
        if (isset($_GET['id'])) {
            $id = $_GET['id'];

            $conexion = ConexionBD::getConexion();
            $repositorioProducto = new PDOCrearProducto($conexion);
            $productos = $repositorioProducto->obtenerTodos();
            $productoEncontrado = null;
            
            foreach ($productos as $producto) {
                if ($producto['id'] == $id) {
                    $productoEncontrado = $producto;
                    break;
                }
            }

            echo "<p><strong>Nombre: </strong>{$producto['nombre']}</p>";
            echo "<p><strong>Precio: </strong>{$producto['precio']}</p>";
            echo "<p><strong>Descripcion: </strong>{$producto['descripcion']}</p>";
            echo "<img src='productos/{$producto['imagen']}'</img>";
        }
        ?>
        <br>
        <a href="index.php">Volver al listado</a>
    </fieldset>
</body>
</html>