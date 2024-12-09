<?php
namespace Src\Interfaces;
use Src\Clases\producto\Producto;

    // Contrato que te compromete a seguir la estructura y funcionamiento en otra clase
    interface InterfazRepositorioProducto{

        public function crear(Producto $producto): bool;

        public function listar(): array;

        public function listarPorId(int $id): ?Producto;

        public function borrar(int $id): bool;
    }
?>