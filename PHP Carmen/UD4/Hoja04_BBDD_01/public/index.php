<?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";
    use Src\conexionBD;
    use Src\funcionesBD;

    $connection = conexionBD::getConnection();
    
    if ($connection instanceof PDO)
    {
        echo 'Conexión establecida correctamente';
    }


    $equipos=funcionesBD::getEquipos();

    foreach($equipos as $equipo){
        echo $equipo . "<br>";
    }
?>