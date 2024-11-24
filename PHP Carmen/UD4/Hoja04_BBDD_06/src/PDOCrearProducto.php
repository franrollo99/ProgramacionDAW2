<?php

namespace Src;

use PDO;
use PDOException;

class PDOCrearProducto implements RepositorioProducto{
    private PDO $conexion;

    public function __construct(PDO $conexion) {
        $this->conexion = $conexion;
    }

    public function crear(array $producto):bool {
        try {
            $consulta = $this->conexion->prepare("
                INSERT INTO productos (nombre, precio, descripcion, imagen) 
                VALUES (:nombre, :precio, :descripcion, :imagen)
            ");
            $consulta->bindParam(':nombre', $producto['nombre'], PDO::PARAM_STR);
            $consulta->bindParam(':precio', $producto['precio'], PDO::PARAM_STR);
            $consulta->bindParam(':descripcion', $producto['descripcion'], PDO::PARAM_STR);
            $consulta->bindParam(':imagen', $producto['imagen'], PDO::PARAM_STR);

            return $consulta->execute();
        } catch (PDOException $e) {
            echo "<p>Error en la base de datos: " . $e->getMessage() . "</p>";
            return false;
        }
    }
}

?>