<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categorias</title>
</head>

<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\FuncionesBD;
    ?>

    <form method="post">
        <label for="categoria">Filtro de productos por categoria</label>
        <select name="categoria" id="categoria">
            <?php
            $categorias=FuncionesBD::obtenerCategorias();
            foreach ($categorias as $categoria){
                $selected=$_POST['categoria']==$categoria->getId()? 'selected' : '';
                echo "<option value='" . $categoria->getId() . "' $selected>".$categoria->getNombre()."</option>";
            }
            ?>
        </select>
        <input type="submit" name="mostrarProductos" value="Filtrar">
    </form>

    <?php
      if(isset($_POST['mostrarProductos'])){
            $categoria=$_POST['categoria'];
            $productos=FuncionesBD::obtenerProductosCategorias($categoria);

            echo "<ul>";
            foreach($productos as $producto){
                echo "<li>$producto</li>";
            }
            echo "</ul>";
      }
    ?>
    <br>
    <a href="principal.php">Pagina principal</a>
</body>

</html>