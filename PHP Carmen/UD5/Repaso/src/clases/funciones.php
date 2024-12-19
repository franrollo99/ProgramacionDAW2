<?php
namespace Fran\Src\clases;
use PDO;
use Fran\Src\clases\ConexionBD;

final class FuncionesBD{

    function validarCredenciales($usuario, $contraseña){
        $conexion = ConexionBD::getConexion();
        $consulta = $conexion->prepare("SELECT usuario, contrasena from usuarios where usuario=:usuario");
        $consulta->bindParam(":usuario", $usuario);
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);


        if($consulta->execute){
            // hash contraseña
            if($resultado['contrasena'] == $resultado){
                return true;
            }
            return false;
        }{
            return false;
        }
    }

    function registrarUsuario($usuario, $contraseña){

    }
}
?>