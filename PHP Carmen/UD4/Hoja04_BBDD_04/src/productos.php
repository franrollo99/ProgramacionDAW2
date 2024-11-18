<?php
    namespace Src;

    class Producto{
        protected  $codigo;
        protected  $precio;
        protected  $nombre;
        protected  $categoria;

        public function __construct($codigo, $precio, $nombre, $categoria){
            $this->codigo=$codigo;
            $this->precio=$precio;
            $this->nombre=$nombre;
            $this->categoria=$categoria;
        }

        public function __toString():string{
            return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria";
        }
    }
?>