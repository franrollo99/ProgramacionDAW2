<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Autenticacion</title>
</head>
<body>
    
    <?php
    require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
    use Fran\Src\clases\FuncionesBD;

    $usuario = $_SERVER['PHP_AUTH_USER'] ?? null;
    $contraseña = $_SERVER['PHP_AUTH_PW'] ?? null;
    
    if(!$usuario || !$contraseña || !FuncionesBD::validarCredenciales($usuario, $contraseña)){
        header('www-Authenticate:Basic Realm="Contenido restringido"');
        header('HTTP/1.0 401 Unauthorized');
        echo "<h1>Necesitas autenticarte para acceder a la web</h1>";
        echo "<a href='index.html'>Pagina de inicio</a>";
        exit();
    }

    // setcookie("ultimaVisita", date("d-m-Y") . " a las " . date("H:i:s"), time() + 3600);
    // if(isset($_COOKIE['ultimaVisita'])){
    //     echo $_COOKIE['ultimaVisita'];
    // }else{
    //     echo "Bienvenido por primera vez";
    // }

    session_start();

    if(isset($_SESSION['contador'])){
        $_SESSION['contador']++;
    }else{
        $_SESSION['contador']=1;
        $_SESSION['fecha']=[];
    }

    $_SESSION['fecha'][]=date("d-m-Y") . " a las " . date("H:i:s");


    echo "<h1>Has accedido a la web un total de " . $_SESSION['contador'] . " veces</h1>";
    echo "<a href='index.html'>Pagina de inicio</a><br>";

    foreach($_SESSION['fecha'] as $indice => $fecha){
        echo "<br> Acceso numero ".($indice+1)." con fecha $fecha";
    }
    ?>

</body>
</html>