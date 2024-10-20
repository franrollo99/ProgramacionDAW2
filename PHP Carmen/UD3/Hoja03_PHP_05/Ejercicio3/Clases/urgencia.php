<?php
    include_once 'medico.php';

    class Urgencia extends Medico{
        private $unidad;

        public function __construct(string $nombre, int $edad, string $turno, string $unidad){
            parent::__construct($nombre, $edad, $turno);
            $this->unidad=$unidad;
        }

        public function mostrarDatos():void{
            echo "<p>Medico de Urgencia: $this->nombre, Edad: $this->edad, Turno: $this->turno, Unidad: $this->unidad</p>";
        }
    }
?>