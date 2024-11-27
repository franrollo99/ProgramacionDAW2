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

    public function obtenerTodos():array{
        $consulta = $this->conexion->query("SELECT id, nombre, precio, descripcion, imagen from productos");
        $resultado=[];

        while($registro = $consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=['id'=>$registro->id ,'nombre'=>$registro->nombre, 'precio'=>$registro->precio, 'descripcion'=>$registro->descripcion, 'imagen'=>$registro->imagen];
            // $resultado[]=$registro;
        }
        return $resultado;
    }

    public function obtenerProducto($id):?array{
        // Convertimos el id que viene como string a tipo int, sino habra que comparar solo por valor y no por tipo tambien
        // $id = (int)$id;
        $productos = $this->obtenerTodos();
    
        foreach ($productos as $producto) {
            if ($producto['id'] == $id) {
                return $producto;
            }
        }

        return null;
    }

    public function eliminar(int $id):bool{
        $consulta = $this->conexion->prepare("DELETE from productos where id=:id");
        $consulta->bindParam(":id", $id, PDO::PARAM_INT);
        return $consulta->execute();
    }
}
?>