<?php
    namespace Src;

    class Electronica extends Producto{
        private int $plazoGarantia;

        public function __construct(int $codigo, float $precio, string $nombre, int $plazoGarantia, string $categoria){
            parent::__construct($codigo, $precio, $nombre, $categoria);
            $this->plazoGarantia=$plazoGarantia;
        }

        //getters y setters
        public function __toString():string{
            return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria, Plazo garantia: $this->plazoGarantia";
        }
    }
?>