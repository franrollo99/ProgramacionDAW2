<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>gestion de sesiones</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
        }
        hr{
            margin: 10px auto;
        }
    </style>
</head>
<body>

    <?php
    session_start();

    // Con la coalescencia nula compruebo si la variable $_SERVER esta definida, sino es null
    $usuario = $_SERVER['PHP_AUTH_USER'] ?? null;
    $contraseña = $_SERVER['PHP_AUTH_PW'] ?? null;
    $hashContraseña = password_hash($contraseña, PASSWORD_BCRYPT);

    if (!$usuario || !$contraseña) {
        header('WWW-Authenticate: Basic Realm="Contenido restringido"');
        header('HTTP/1.0 401 Unauthorized');
        echo "Debe autenticarse para acceder al contenido! <br><br>";
        exit();
    }

    //Comprobar si ya existe la variable de sesión contador
    if (isset($_SESSION['contador'])) {
        $_SESSION['contador']++;
    } else {
        $_SESSION['contador'] = 1;
        $_SESSION['visitas']=[];
        $mensaje = "¡Bienvenido! Esta es tu primera visita.";
    }

    $_SESSION['visitas'][]=date("d-m-Y") . " a las  " . date("H:i:s")
    ?>

    <h1>Gestion sesiones</h1>
    <?php
    echo "Nombre de usuario: $usuario <hr>";
    echo "Hash de la contraseña: $hashContraseña <hr>";

    foreach($_SESSION['visitas'] as $indice => $fecha){
        echo $fecha . "<hr>";
    }
    ?>
</body>
</html>
