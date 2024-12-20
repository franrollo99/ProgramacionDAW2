<?php
namespace Fran\Src\clases;
use PDO;
use PDOException;
use Fran\Src\clases\ConexionBD;

final class FuncionesBD{

    public static function validarCredenciales(string $usuario, string $contraseña): bool{
        $conexion = ConexionBD::getConexion();
        $consulta = $conexion->prepare("SELECT usuario, contrasena from usuarios where usuario = :usuario");
        $consulta->bindParam(":usuario", $usuario, PDO::PARAM_STR);
        $consulta->execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);

        if($consulta->rowCount()>0){
            return password_verify($contraseña, $resultado['contrasena']);
        }else{
            return false;
        }
    }

    public static function registrarUsuario(string $usuario, string $contraseña):bool{
        $conexion = ConexionBD::getConexion();
        try{
            $consulta = $conexion->prepare("INSERT into usuarios (usuario, contrasena) values (:usuario, :contrasena)");
            $consulta->bindParam(":usuario", $usuario, PDO::PARAM_STR);
            $consulta->bindParam(":contrasena", $contraseña, PDO::PARAM_STR);
            return $consulta->execute();
        }catch(PDOException $e){
            echo "Error al registrar el usuario: $e";
            return false;
        }
    }
}
?>