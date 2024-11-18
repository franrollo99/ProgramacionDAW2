<?php
    namespace Src;

    abstract class Producto{
        protected  int $codigo;
        protected  float $precio;
        protected  string $nombre;
        protected  Categoria $categoria;

        public function __construct(int $codigo, float $precio, string $nombre, Categoria $categoria){
            $this->codigo=$codigo;
            $this->precio=$precio;
            $this->nombre=$nombre;
            $this->categoria=$categoria;
        }

        //getters y setters
        // public function __toString():string{
        //     // return "Codigo: $this->getCodigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria";
        // }
    }
?>