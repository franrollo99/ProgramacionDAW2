<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conectado</title>
</head>
<body>
    
    <?php
    require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
    use Fran\App\clases\Autenticarse;

    iniciar_sesion();

    if (!estaLogueado()) {
        flash("error", "No tienes acceso a esta pagina");
        redireccionar("index.html?action=paginaLogin");
    }else{
        echo "<h1>Te has conectado</h1>";
        echo "Hola tu ID usuario es ";
        echo "<form action='index.php'><button onclick=".Autenticarse::desconectarse().">Cerrar sesion</button></form>";
    }

    ?>


</body>
</html>