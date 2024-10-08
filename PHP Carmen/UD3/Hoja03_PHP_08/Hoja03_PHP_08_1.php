<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    
    <!-- METODO GET -->
    <?php 
        if (isset($_GET['enviar'])) { 
            $nombre = $_GET['nombre'];
            $apellidos = $_GET['apellidos'];
            $edad = $_GET['edad'];
            echo "Nombre: $nombre <br> Apellidos: $apellidos <br> Edad: $edad"; 
        }
    ?>

    <!-- METODO POST -->
    <?php 
        if (isset($_POST['enviar'])) { 
            $nombre = $_POST['nombre'];
            $apellidos = $_POST['apellidos'];
            $edad = $_POST['edad'];
            echo "Nombre: $nombre <br> Apellidos: $apellidos <br> Edad: $edad"; 
        }
    ?>
</body>
</html>