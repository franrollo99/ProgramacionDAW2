<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
</head>
<body>

    <?php
    require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
    use Fran\App\clases\Autenticarse;

    Autenticarse::inicializar();
    Autenticarse::configurar();
    Autenticarse::runAccion();
    ?>

</body>
</html>