<?php

namespace Fran\App\clases;
use Fran\App\clases\conexionBD;
use PDO;
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
                contrasena VARCHAR(255) NOT NULL
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
            redireccionar("index.php?action=paginaLogin.php");
        }
        
        if(estaLogueado()){
            redireccionar("index.php?action=paginaConectado.php");
        }

        $correo = $_POST['correo'] ?? '';
        $contraseña = $_POST['contraseña'] ?? '';

        $conexion = conexionBD::getConexion();
        $consulta = $conexion->prepare("SELECT id, correo, contrasena from usuarios where correo = :correo");
        $consulta->bindParam(':correo', $correo, PDO::PARAM_STR);
        $consulta->execute();

        $usuario = $consulta->fetch(PDO::FETCH_ASSOC);

        if($consulta->rowCount() > 0){
            if(password_verify($clave, $usuario['clave'])){

            }else{
                
            }


        }else{
            flash("error", "credenciales incorrectas");
            flash("correo", $correo);
            redireccionar("index.php?action=paginaLogin");
        }

        if($consulta->rowCount() === 0 && !password_verify($clave, $usuario['clave'])){
        
        $_SESSION['usuario'] = {
            'id' => $usuario['id'],
            'correo' => $correo,
        }

        redireccionar("index.php?action=paginaConectado");
    }

    static public function paginaConectado():void{
        if(estaLogueado()){
            redireccionar("paginaConectado.php");
        }else{
            flash("error", "No tienes acceso a la pagina");
            redireccionar("index.php?action=paginaLogin");
        }
    }

}
?>