<?php

namespace Src;

class CrearProducto{
    private RepositorioProducto $repositorio;

    public function __construct(RepositorioProducto $repositorio){
        $this->repositorio=$repositorio;
    }

    public function crear(array $producto):bool{
        return $this->repositorio->crear($producto);
    }
}

?>