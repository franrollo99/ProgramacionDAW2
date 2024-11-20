<?php
    namespace Src;

    class Electronica extends Producto{
        private int $plazoGarantia;

        public function __construct(int $codigo, float $precio, string $nombre, int $plazoGarantia, Categoria $categoria){
            parent::__construct($codigo, $precio, $nombre, $categoria);
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