<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supermercado</title>
</head>
<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\FuncionesBD;
    ?>
    <h1>Supermercado</h1>
    <p>Pulsa el boton para mostrar todos los productos</p>
    <form method="get">
        <input type="submit" name="mostrarProductos" value="Mostrar">
    </form>
    <br>
    <a href="categorias.php">Categorias</a>
    
    <?php
        if(isset($_GET['mostrarProductos'])){
            $productos=FuncionesBD::obtenerProductos();

            echo "<ul>";
            foreach($productos as $producto){
                echo "<li>$producto</li>";
            }
            echo "</ul>";
        }
    ?>
</body>
</html>