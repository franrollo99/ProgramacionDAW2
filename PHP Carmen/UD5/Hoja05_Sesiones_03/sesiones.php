<?php
session_start();

$usuario =$_SERVER['PHP_AUTH_USER'] ?? null;
$contraseña = $_SERVER['PHP_AUTH_PW'] ?? null;
if (!$usuario || !$contraseña){
    header('WWW-Authenticate: Basic Realm="Contenido restringido"');
    header('HTTP/1.0 401 Unauthorized');
    echo "Debe autenticarse para acceder al contenido! <br><br>";
    echo "<a href='index.html'>Pagina de inicio</a>";
    exit();
}

//Comprobar si ya existe la variable de sesión contador
if (isset($_SESSION['contador'])) {
    $_SESSION['contador']++;
    $mensaje = "Has visitado esta página " . $_SESSION['contador'] . " veces.";
} else {
    $_SESSION['contador'] = 1;
    $_SESSION['visitas']=[];
    $mensaje = "¡Bienvenido! Esta es tu primera visita.";
}

$_SESSION['visitas'][]=date("d-m-Y H:i:s")
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Visitas</title>
</head>
<body>
    <?php
    echo "<h1>$mensaje</h1><hr>";

    foreach($_SESSION['visitas'] as $indice => $fecha){
        echo "<h3>Visita numero " . ($indice+1) . " el $fecha</h3><hr>";
    }
    ?>
</body>
</html>
