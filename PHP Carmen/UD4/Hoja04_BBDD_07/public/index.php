<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina principal</title>
    <link rel="stylesheet" href="../style/estiloIndex.css">
</head>
<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\conexionBD;
    use Src\PDOCrearProducto;

    $conexion=ConexionBD::getConexion();
    $repositorioProducto = new PDOCrearProducto($conexion);
    $productos=$repositorioProducto->obtenerTodos();

    if($productos){
    ?>
    <h1>Listado de productos</h1>
    <table>
        <tr>
            <th>NOMBRE</th>
            <th>PRECIO</th>
            <th>ACCIONES</th>
        </tr>

        <?php
        

            foreach($productos as $producto){
                echo "<tr><td>{$producto['nombre']}</td><td>{$producto['precio']} €</td><td><a href='detalle.php?id={$producto['id']}'>Más Información</a>
                <a href='borrar.php?id={$producto['id']}'>Borrar</a></td></tr>";
                // echo "<tr><td>{$producto->nombre}</td><td>{$producto->precio}</td><td><a href='detalle.php?id={$producto->id}'>Más Información</a>
                // <a href='borrar.php?id={$producto->id}'>Borrar</a></td></tr>";
            }
        }else{
            echo "<h2>No hay ningun producto para mostrar</h2>";
        }
        ?>

    </table>
    <br><br>
    <a href="procesa.php">Crear Producto</a>

</body>
</html>