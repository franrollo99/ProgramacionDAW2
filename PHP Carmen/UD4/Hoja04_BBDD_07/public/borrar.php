<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borrar producto</title>
    <link rel="stylesheet" href="../style/estiloBorrar.css">
</head>
<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\conexionBD;
    use Src\PDOCrearProducto;

    if (isset($_GET['id'])){
        $id = (int)$_GET['id'];

        $conexion = conexionBD::getConexion();
        $repositorioProducto = new PDOCrearProducto($conexion);
        $producto = $repositorioProducto->obtenerProducto($id);

        if($producto){
            $productoEliminado = $repositorioProducto->eliminar($id);

            if($productoEliminado){
                $rutaImagen="productos/" . $producto['imagen'];

                if(file_exists($rutaImagen)){
                    unlink($rutaImagen);
                    echo "<p>El producto y su imagen asociada han sido eliminados con exito</p>";
                }else{
                    echo "<p>El producto ha sido eliminado con exito pero no se ha encontrado la imagen asociada</p>";
                }
            }else{
                echo "<p>No se pudo eliminar el producto correctamente</p>";
            }
        }else{
            echo "<p>El producto con id $id no existe</p>";
        }
    }else{
        echo "<p>No se ha proporcionado un ID valido</p>";
    }
    ?>
    <br>
    <a href="index.php">Volver al listado</a>
</body>
</html>