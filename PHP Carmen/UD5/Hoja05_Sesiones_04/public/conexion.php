<?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";
    use Fran\App\clases\conexionBD;

    $conexion = conexionBD::getConexion();
    
    if ($conexion instanceof PDO){
        echo 'Conexión establecida correctamente';
    }
?>