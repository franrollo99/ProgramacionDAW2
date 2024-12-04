<?php
session_start();

//Comprobar si ya existe la variable de sesión contador
if (isset($_SESSION['contador'])) {
    $_SESSION['contador']++;
} else {
    $_SESSION['contador'] = 1;
    $_SESSION['visitas']=[];
}

$_SESSION['visitas'][]=date("d-m-Y H:i:s")
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fecha de visitas</title>
</head>
<body>
    <?php
    foreach($_SESSION['visitas'] as $indice => $fecha){
        echo "<h3>Visita numero " . ($indice+1) . " el $fecha</h3><hr>";
    }
    ?>
</body>
</html>
