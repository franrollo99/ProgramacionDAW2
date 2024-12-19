<?php

require_once dirname(__DIR__, 1) . "/vendor/autoload.php";

use Fran\Src\clases\ConexionBD;

$conexion = ConexionBD::getConexion();
if($conexion){
    echo "Conexion establecida correctamente";
}

?>