<?php
    namespace Src;

    class Electronica extends Producto{
        private $plazoGarantia;

        public function __construct($codigo, $precio, $nombre, $plazoGarantia, $categoria){
            parent::__construct($codigo, $precio, $nombre, $categoria);
            $this->plazoGarantia=$plazoGarantia;
        }

        public function __toString():string{
            return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria, Plazo garantia: $this->plazoGarantia";
        }
    }
?>