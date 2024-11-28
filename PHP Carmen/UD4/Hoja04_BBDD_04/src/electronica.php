<?php
    namespace Src;

    class Electronica extends Producto{
        private int $plazoGarantia;

        public function __construct(int $codigo, string $nombre, float $precio, int $plazoGarantia, Categoria $categoria){
            parent::__construct($codigo, $nombre, $precio, $categoria);
            $this->plazoGarantia=$plazoGarantia;
        }

        public function __toString():string{
            return parent::__toString() . ", Plazo garantia: $this->plazoGarantia";
        }

        public function setPlazoGarantia(int $plazoGarantia): void{
            $this->plazoGarantia=$plazoGarantia;
        }

        public function getPlazoGarantia():int{
            return $this->plazoGarantia;
        }
    }
?>