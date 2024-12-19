<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autenticacion</title>
</head>
<body>
    
    <?php
    require_once dirname(__DIR__, 1) . "vendor/autoload.php";

    $usuario = $_SERVER['PHP_AUTH_USER'] ?? null;
    $contraseña = $_SERVER['PHP_AUTH_PW'] ?? null;
    
    if(!validarCredenciales($usuario, $contraseña)){
        header('www-Authenticate:Basic Realm="Contenido restringido"');
        header('HTTP/1.0 401 Unauthorized');
        echo "<h1>Necesitas autenticarte para acceder a la web</h1>";
        echo "<a href='index.html'>Pagina de inicio</a>";
        exit();
    }
    ?>

    <h1>Has accedido a la web</h1>
</body>
</html>