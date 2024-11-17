<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Llegada</title>
</head>
<body>

    <?php
        require_once dirname(__DIR__) . "/vendor/autoload.php";
        use Src\funcionesBD;
    ?>

    <h1>Llegada</h1>
    <hr>
    <form action="" method="get">
        <button type="submit" name="llegada">Llegada</button>
    </form>

    <?php
        if(isset($_REQUEST['llegada'])){
            funcionesBD::llegada();
        }
    ?>

    <br>
    <a href="index.php">Pagina de inicio</a>

</body>
</html>