<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borrar</title>
</head>
<body>
    <a href="../index.php">Volver a la pagina principal</a>
    <?php
    require_once "../vendor/autoload.php";
    use Src\Clases\FuncionesBD;

    if(isset($_GET['id'])){
        $id=$_GET['id'];
        if(FuncionesBD::borrar($id)){
            echo "<p>El producto se ha eliminado correctamente</p>";
        }else{
            echo "<p>El producto no ha podido ser eliminado</p>";
        }
    }
    ?>
</body>
</html>