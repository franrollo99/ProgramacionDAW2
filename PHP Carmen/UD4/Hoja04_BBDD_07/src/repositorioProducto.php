<?php

namespace Src;

interface RepositorioProducto {
    public function crear(array $producto): bool;
    public function obtenerTodos(): array;
    public function eliminar(int $id): bool;
}

?>