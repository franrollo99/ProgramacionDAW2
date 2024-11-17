<?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";
    use Src\conexionBD;

    $conexion = conexionBD::getConnection();
    
    if ($conexion instanceof PDO){
        echo 'Conexión establecida correctamente';
    }
?>