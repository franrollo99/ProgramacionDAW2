<?php
declare(strict_types = 1);

namespace App\Entities;

use App\Services\DBConnection;
use PDO;

final class Producto
{
    private PDO $db;

    public function __construct()
    {
        $this->db = DBConnection::getConexion();
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

    public function find(int $id): array
    {
        $sql = 'SELECT nombre, descripcion, precio from productos where id = :id';
        
        $stmt = $this->db->prepare(query: $sql);
        $stmt->execute(['id' => $id]);

        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function get(): array
    {
        $sql = 'SELECT nombre, descripcion, precio from productos';

        $stmt = $this->db->query(query: $sql);
        
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function update(int $id, array $data): bool
    {
        $sql = 'UPDATE productos set nombre = :nombre, descripcion = :descripcion, precio = :precio where id = :id';

        $stmt = $this->db->prepare(query: $sql);
        $stmt->execute(['id' => $id, 'nombre' => $data['nombre'], 'descripcion' => $data['descripcion'], 'precio' => $data['precio']]);

        return $stmt->rowCount() > 0;
    }

    public function delete(int $id): bool
    {
        $sql = 'DELETE FROM productos WHERE id = :id';

        $stmt = $this->db->prepare(query: $sql);
        $stmt->execute(['id' => $id]);

        return $stmt->rowCount() > 0;
    }

}