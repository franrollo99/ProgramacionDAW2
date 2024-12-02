<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cookies</title>
</head>
<body>
    <?php
    setcookie("ultimaVisita", date("d-m-Y H:i:s"), time() + 3600);

    if (isset($_COOKIE['ultimaVisita'])) {
        echo "<h3>Tu ultima visita fue el {$_COOKIE['ultimaVisita']}</h3>";
    } else {
        echo "<h1>Bienvenido a la web</h1>";
    }
    ?>
</body>
</html>