<?php
    include_once 'productos.php';

    class Alimentacion extends Productos{
        private $fechaCaducidad;

        public function __construct(int $codigo, float $precio, string $nombre, string $fechaCaducidad){
            parent::__construct($codigo, $precio, $nombre);
            $this->fechaCaducidad=$fechaCaducidad;
        }

        public function mostrarDatos():void{
            echo "<p>Nombre del alimento: $this->nombre, Precio del producto: $this->precio €, Fecha de caducidad: $this->fechaCaducidad</p>";
        }
    }
?>