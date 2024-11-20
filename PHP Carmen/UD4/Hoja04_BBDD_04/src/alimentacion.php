<?php
    namespace Src;

    class Alimentacion extends Producto{
        private int $mesCaducidad;
        private int $añoCaducidad;

        public function __construct(int $codigo, float $precio, string $nombre, int $mesCaducidad, int $añoCaducidad, Categoria $categoria){
            parent::__construct($codigo, $precio, $nombre, $categoria);
            $this->mesCaducidad=$mesCaducidad;
            $this->añoCaducidad=$añoCaducidad;
        }

        public function __toString():string{
            return parent::__toString() . ", Mes de caducidad: $this->mesCaducidad, Año de Caducidad: $this->añoCaducidad";
        }

        public function setMesCaducidad(int $mesCaducidad):void{
            $this->mesCaducidad=$mesCaducidad;
        }

        public function getMesCaducidad():int{
            return $this->mesCaducidad;
        }

        public function setAñoCaducidad(int $añoCaducidad):void{
            $this->añoCaducidad=$añoCaducidad;
        }

        public function getAñoCaducidad():int{
            return $this->añoCaducidad;
        }
    }
?>