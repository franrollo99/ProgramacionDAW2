<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Listado de productos</title>
</head>
<body>

    <?php
        require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
        use Src\Clases\FuncionesBD;

        $productos=FuncionesBD::listar();
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
                echo "<tr><td>{$producto['nombre']}</td><td>{$producto['precio']}</td><td><a href='./Fuentes/detalle.php?id={$producto['id']}'>Mas informacion</a><a href='./Fuentes/borrar.php?id={$producto['id']}'>Borrar</a></td></tr>";
            }
        }else{
            echo "<h2>No se ha encontrado ningun producto</h2>";
        }
        ?>

    </table>
    <a href="Fuentes/formularioAltaPro.php">Crear producto</a>
</body>
</html>