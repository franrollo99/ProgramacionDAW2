<?php
session_start();

//Comprobar si ya existe la variable de sesión contador
if (isset($_SESSION['contador'])) {
    $_SESSION['contador']++;
} else {
    $_SESSION['contador'] = 1;
}
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
    echo "<h1>Has visitado esta página " . $_SESSION['contador'] . " veces.</h1>";
    ?>
</body>
</html>
