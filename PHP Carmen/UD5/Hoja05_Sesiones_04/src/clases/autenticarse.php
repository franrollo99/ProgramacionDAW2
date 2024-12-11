<?php

namespace Fran\App\clases;
use Fran\App\clases\conexionBD;
use PDOException;

class Autenticarse{

    static public function inicializar():void{
        iniciar_sesion();
    }

    static public function configurar():void{
        // Guardo en una variable la query para crear la tabla
        $crearTabla = "
            CREATE TABLE IF NOT EXISTS usuarios (
                id INT AUTO_INCREMENT PRIMARY KEY,
                correo VARCHAR(255) NOT NULL UNIQUE,
                clave VARCHAR(255) NOT NULL
            );
        ";

        try {
            $conexion = conexionBD::getConexion();
            $conexion->exec($crearTabla);
        } catch (PDOException $e) {
            echo 'Error al crear la tabla: ' . $e->getMessage();
        }

        self::crearDatosUsuario();
    }

    static private function crearDatosUsuario():void{
        $usuario="frodriguezl2301@educantabria.es";
        $clave="password";
        $claveHash=password_hash($clave, PASSWORD_BCRYPT);
    }

    static public function autenticar():void{

        if(!esPost()){
            flash("error", "Metodo HTTP no permitido");
            redireccionar("index.php");
        }else if(estaLogueado()){
            
        }
    }

    static public function paginaConectado():void{
        
    }

}
?>