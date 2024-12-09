<?php
namespace Src\Clases;
use PDO;
use PDOException;

$dotenv=\Dotenv\Dotenv::createImmutable(dirname(__DIR__,2));
$dotenv->load();

final class ConexionBD{
    
    private static ?PDO $conexion=null;
    
    final private function __construct(){}

    private function __clone(){}
    

    final public static function getConexion(): ?PDO{
        try{
            if(!self::$conexion){
                self::$conexion=new PDO(
                    dsn: $_ENV['DB_DSN'],
                    username: $_ENV['DB_USERNAME'],
                    password: $_ENV['DB_PASSWORD'],
                );
                self::$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
        }catch(PDOException $e){
            echo match($e->getCode()){
                1049=>'Base de datos no encontrada',
                1045=>'Acceso denegado',
                2002=>'Conexion rechazada',
                default=>'Error desconocido',
            };
        }
        return self::$conexion;
    }
}
?>