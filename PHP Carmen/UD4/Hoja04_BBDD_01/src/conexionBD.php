<?php
    namespace Src;
    
    use PDO;
    use PDOException;

    $dotenv = \Dotenv\Dotenv::createImmutable(dirname(__DIR__, 1));
    $dotenv->load();

    final class conexionBD
    {
        private static ?PDO $connection = null;

        final private function __construct() {}

        final public static function getConnection(): ?PDO
        {
            try {
                if ( ! self::$connection) {
                    self::$connection = new PDO(
                        dsn: $_ENV['DB_DSN'],
                        username: $_ENV['DB_USERNAME'],
                        password: $_ENV['DB_PASSWORD'],
                    );
                }
            } catch (PDOException $e) {
                echo match ($e->getCode()) {
                    1049 => 'Base de datos no encontrada',
                    1045 => 'Acceso denegado',
                    2002 => 'Conexión rechazada',
                    default => 'Error desconocido',
                };
            }

            return self::$connection;
        }
        private function __clone() {}
    }
?>