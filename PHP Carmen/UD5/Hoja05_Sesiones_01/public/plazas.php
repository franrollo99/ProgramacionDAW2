<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plazas</title>
    <link rel="stylesheet" href="../style/estilo.css">
</head>

<body>

    <?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";

    use Src\classes\funcionesBD;

    // Comprobamos si la variable $_SERVER['PHP_AUTH_USER'] esta definida, es ese caso se asigna su valor a usuario, sino es null
    $usuario = isset($_SERVER['PHP_AUTH_USER']) ? $_SERVER['PHP_AUTH_USER'] : null;

    // Usamos el operador de coalescencia nula, mas moderno y legible
    // Comprueba si la variable $_SERVER esta definida, sino es null
    $contraseña = $_SERVER['PHP_AUTH_PW'] ?? null;
    
    if (!$usuario || !$contraseña || !funcionesBD::verificarCredenciales($usuario, $contraseña)) {
        header('WWW-Authenticate: Basic Realm="Contenido restringido"');
        header('HTTP/1.0 401 Unauthorized');
        echo "Debe autenticarse para acceder al contenido! <br><br>";
        echo "<a href='index.html'>Pagina de inicio</a>";
        exit();
    }
    ?>

    <h1>Gestion de plazas</h1>
    <hr>
    <form action="" method="post">
        <?php
        $asientos = funcionesBD::getAsientos();

        foreach ($asientos as $asiento) {
            echo "<label>Plaza {$asiento['numero']}: <input type='text' name='plaza{$asiento['numero']}' value='{$asiento['precio']}'> €</label><br><br>";
        }
        ?>

        <hr>
        <input type="submit" name="actualizar" value="Actualizar">
    </form>
    <br>
    <a href="index.html">Pagina de inicio</a>
    <br><br>

    <?php
    // if($_SERVER['REQUEST_METHOD']==='POST')
    if (isset($_POST['actualizar'])) {
        $preciosActualizados = [];

        //Array $_POST tiene todos los datos del formulario 'name'=>'value'
        foreach ($_POST as $key => $value) {
            if (strpos($key, 'plaza') === 0 && !empty($value)) {
                $numeroAsiento = substr($key, 5);//Extraemos el numero que aparece despues de plaza en el name
                
                if (!is_numeric($value)) {
                    echo "Error: El precio del asiento $numeroAsiento no es válido.<br>";
                    continue;
                }elseif($value <= 0){
                    echo "Error: El precio del asiento $numeroAsiento es menor o igual a 0.<br>";
                    continue;
                }

                $preciosActualizados[$numeroAsiento] = $value;
            }
        }

        funcionesBD::actualizarPrecios($preciosActualizados);

        //Recargamos la pagina despues de usar el formulario para que se actualicen los datos
        // header("Location: " . $_SERVER['PHP_SELF']);
        header("Location: plazas.php?mensaje-$mensajeC");
        exit;

    }
    ?>
</body>

</html>