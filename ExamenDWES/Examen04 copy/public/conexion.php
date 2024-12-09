<?php
require_once "../vendor/autoload.php";
use Src\Clases\ConexionBD;

$conexion = conexionBD::getConexion();
if($conexion instanceof PDO){
    echo "Conexion establecida con exito";
}
?>