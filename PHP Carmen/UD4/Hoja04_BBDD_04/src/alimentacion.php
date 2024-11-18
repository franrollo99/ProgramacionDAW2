<?php
    namespace Src;

    class Alimentacion extends Producto{
        private $mesCaducidad;
        private $añoCaducidad;

        public function __construct($codigo, $precio, $nombre, $mesCaducidad, $añoCaducidad, $categoria){
            parent::__construct($codigo, $precio, $nombre, $categoria);
            $this->mesCaducidad=$mesCaducidad;
            $this->añoCaducidad=$añoCaducidad;
        }

        public function __toString():string{
            return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria, Mes de caducidad: $this->mesCaducidad, Año de Caducidad: $this->añoCaducidad";
        }
    }
?>