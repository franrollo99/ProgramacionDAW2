<?php
    require_once "../vendor/autoload.php";
    use Src\conexionBD;

    $conexion = conexionBD::getConnection();

    if ($conexion instanceof PDO){
        echo 'Conexión establecida correctamente';
    }
?>