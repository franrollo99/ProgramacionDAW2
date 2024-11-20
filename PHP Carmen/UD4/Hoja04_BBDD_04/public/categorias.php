<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Categorias</title>
</head>

<body>
    <?php

    ?>

    <form method="post">
        <select name="categoria" required>
            <option value="-1" selected disable>Selecciona una categoria</option>
            <?php
            foreach ($categorias as $categoria) {
                echo '<option value="' . $categoria->getId() . '" ' . (isset($_POST['categoria']) && $_POST['categoria'] == $categoria->getId() ? 'selected' : '') . '>';

            }
            ?>
        </select>
        <button type="submit">Filtrar</button>
    </form>

    <?php
      if(isset($_GET['mostrarProductos'])){
            
      }
    ?>

    <a href="principal.php">Pagina principal</a>
</body>

</html>