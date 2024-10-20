<?php
    include_once 'productos.php';

    class Electronica extends Productos{
        private $plazoGarantia;

        public function __construct(int $codigo, float $precio, string $nombre, string $plazoGarantia){
            parent::__construct($codigo, $precio, $nombre);
            $this->plazoGarantia=$plazoGarantia;
        }

        public function mostrarDatos():void{
            echo "<p>Nombre del electrodomestico: $this->nombre, Precio del producto: $this->precio €, Plazo de garantia: $this->plazoGarantia</p>";
        }
    }
?>