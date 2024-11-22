<?php
    require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
    use Src\conexionBD;

    $conexion = conexionBD::getConexion();
    
    if ($conexion instanceof PDO){
        echo 'Conexión establecida correctamente';
    }
?>