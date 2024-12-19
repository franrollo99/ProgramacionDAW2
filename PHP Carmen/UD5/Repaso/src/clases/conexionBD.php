<?php
namespace Fran\Src\clases;

use PDO;

$dotenv = \Dotenv\Dotenv::createImmutable(dirname(__DIR__, 2));
$dotenv->load();

final class ConexionBD
{
    private static ?PDO $conexion = null;

    private function __construct() {}

    public static function getConexion(): PDO
    {
        if (!self::$conexion) {
            self::$conexion = new PDO(
                $_ENV['DB_DSN'],
                $_ENV['DB_USERNAME'],
                $_ENV['DB_PASSWORD']
            );
        }
        return self::$conexion;
    }

    private function __clone() {}
}
