<?php
    namespace Src;

    class Alimentacion extends Producto{
        private int $mesCaducidad;
        private int $añoCaducidad;

        public function __construct(int $codigo, float $precio, string $nombre, int $mesCaducidad, int $añoCaducidad, string $categoria){
            parent::__construct($codigo, $precio, $nombre, $categoria);
            $this->mesCaducidad=$mesCaducidad;
            $this->añoCaducidad=$añoCaducidad;
        }

        //getters y setters
        public function __toString():string{
            return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria, Mes de caducidad: $this->mesCaducidad, Año de Caducidad: $this->añoCaducidad";
        }
    }
?>