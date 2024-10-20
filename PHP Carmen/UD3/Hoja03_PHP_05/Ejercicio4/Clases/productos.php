<?php
    abstract class Productos{
        protected $codigo;
        protected $precio;
        protected $nombre;

        public function __construct(int $codigo, float $precio, string $nombre){
            $this->codigo=$codigo;
            $this->precio=$precio;
            $this->nombre=$nombre;
        }

        abstract public function mostrarDatos():void;

        public function getPrecio():float{
            return $this->precio;
        }
    }
?>