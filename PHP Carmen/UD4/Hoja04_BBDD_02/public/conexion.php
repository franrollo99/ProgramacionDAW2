<?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";
    use Src\conexionBD;

    $connection = conexionBD::getConnection();
    
    if ($connection instanceof PDO){
        echo 'Conexión establecida correctamente';
    }
?>