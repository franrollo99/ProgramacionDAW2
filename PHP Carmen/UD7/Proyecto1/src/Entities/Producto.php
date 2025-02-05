<?php

declare(strict_types = 1);

namespace App\Entities;

use App\Services\ConexionBD;
use PDO;

final class Producto
{
    private PDO $db;

    public function __construct()
    {
        $this->db = ConexionBD::getConexion();
        $this-> createTable();
    }

    private function createTable(): void
    {
        $sql = 'CREATE TABLE IF NOT EXISTS productos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(50) NOT NULL,
            descripcion VARCHAR(255) NOT NULL,
            precio DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )';

        $this->db->exec(statement: $sql);
    }

    /**
     * @param array<string, mixed> $data
     * @return false|string
     */
    public function create(array $data): false|string
    {
        $sql = '
            INSERT INTO productos (nombre, descripcion, precio)
            VALUES (:nombre, :descripcion, :precio)
        ';

        $stmt = $this->db->prepare(query: $sql);
        $stmt->execute(params: $data);

        return $this->db->lastInsertId();
    }




     /**
     * Método para obtener todos los productos
     * @return array Retorna un array con todos los productos
     */
    public function get(): array
    {
        $sql = 'SELECT * FROM productos';
        $stmt = $this->db->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Método para buscar un producto por ID
     * @param int $id
     * @return array|null Retorna el producto si existe, null si no se encuentra
     */
    public function find(int $id): ?array
    {
        $sql = 'SELECT * FROM productos WHERE id = :id';
        $stmt = $this->db->prepare($sql);
        $stmt->execute(['id' => $id]);
        $producto = $stmt->fetch(PDO::FETCH_ASSOC);

        return $producto ?: null;
    }

    /**
     * Método para actualizar un producto
     * @param int $id
     * @param array<string, mixed> $data
     * @return bool Retorna true si se actualizó, false si falló
     */
    public function update(int $id, array $data): bool
    {
        $sql = '
            UPDATE productos 
            SET nombre = :nombre, descripcion = :descripcion, precio = :precio 
            WHERE id = :id
        ';

        $stmt = $this->db->prepare($sql);
        return $stmt->execute([
            'id' => $id,
            'nombre' => $data['nombre'],
            'descripcion' => $data['descripcion'],
            'precio' => $data['precio']
        ]);
    }

    /**
     * Método para eliminar un producto por ID
     * @param int $id
     * @return bool Retorna true si se eliminó, false si falló
     */
    public function delete(int $id): bool
    {
        $sql = 'DELETE FROM productos WHERE id = :id';
        $stmt = $this->db->prepare($sql);
        return $stmt->execute(['id' => $id]);
    }

}

?>