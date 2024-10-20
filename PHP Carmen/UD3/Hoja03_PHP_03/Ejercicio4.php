<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    echo "<table border='1'>";

    foreach($_SERVER as $nombre => $valor){
        echo "<tr><td>$nombre</td><td>$valor</td></tr>";
    }

    echo "</table>";
?>

</body>
</html>