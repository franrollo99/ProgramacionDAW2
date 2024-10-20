<?php
    trait InformacionPersonal {
        public $nombre;
        public $edad;
        public $direccion;
    
        public function actualizarInformacionPersonal($nombre, $edad, $direccion) {
            $this->nombre = $nombre;
            $this->edad = $edad;
            $this->direccion = $direccion;
        }
    
        public function mostrarInformacionPersonal() {
            return "Nombre: $this->nombre, Edad: $this->edad, Dirección: $this->direccion";
        }
    }
?>