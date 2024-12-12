<?php

namespace Fran\App\clases;
use Fran\App\clases\ConexionBD;
use PDO;
use PDOException;

class Autenticarse{

    public static function inicializar():void{
        iniciar_sesion();
    }

    public static function configurar():void{
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

    public static function crearDatosUsuario():void{
        $usuario="frodriguezl2301@educantabria.es";
        $clave="password";
        $claveHash=password_hash($clave, PASSWORD_BCRYPT);
    }

    public static function autenticar():void{

        if(!esPost()){
            flash("error", "Metodo HTTP no permitido");
            redireccionar("index.php?action=paginaLogin");
        }
        
        if(estaLogueado()){
            redireccionar("index.php?action=paginaConectado");
        }

        $correo = $_POST['correo'] ?? '';
        $contraseña = $_POST['contraseña'] ?? '';

        $conexion = conexionBD::getConexion();
        $consulta = $conexion->prepare("SELECT id, correo, contrasena from usuarios where correo = :correo");
        $consulta->bindParam(':correo', $correo, PDO::PARAM_STR);
        $consulta->execute();

        $usuario = $consulta->fetch(PDO::FETCH_ASSOC);

        if($consulta->rowCount() > 0){
            if(password_verify($contraseña, $usuario['contrasena'])){
                redireccionar("index.php?action=conectado");
            }else{
                flash("error", "credenciales incorrectas");
                flash("correo", $correo);
                redireccionar("index.php?action=paginaLogin");
            }
        }else{
            flash("error", "credenciales incorrectas");
            flash("correo", $correo);
            redireccionar("index.php?action=paginaLogin");
        }
    }

    public static function paginaConectado():void{
        if(estaLogueado()){
            redireccionar("paginaConectado.php");
        }else{
            flash("error", "No tienes acceso a la pagina");
            redireccionar("index.php?action=paginaLogin");
        }
    }

    public static function desconectarse():void{
        session_destroy();
        redireccionar("index.php?action=paginaConectado");
    }

    public static function paginaLogin():void{
        if(estaLogueado()){
            redireccionar("index.php?action=paginaConectado");
        }else{
            redireccionar("paginaLogin.php");
        }
    }

    public static function runAccion(){
        $accion = $_GET['action'] ?? 'paginaLogin';

        switch ($accion){
            case 'paginaLogin':
                self::paginaLogin();
                break;
            case 'autenticar':
                self::autenticar();
                break;
            case 'paginaConectado':
                self::paginaConectado();
                break;
            case 'desconectarse':
                self::desconectarse();
                break;
            default:
                redireccionar("index.php?action=paginaLogin");
        }
    }
}
?>