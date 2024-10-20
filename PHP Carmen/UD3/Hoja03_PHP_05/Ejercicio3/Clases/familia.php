<?php
    include_once 'medico.php';

    class Familia extends Medico{
        private $num_pacientes;

        public function __construct(string $nombre, int $edad, string $turno, int $num_pacientes){
            parent::__construct($nombre, $edad, $turno);
            $this->num_pacientes=$num_pacientes;
        }

        public function getNuMPacientes():int{
            return $this->num_pacientes;
        }

        //Mostrarlos datos del medico de familia
        public function mostrarDatos():void{
            echo "<p>Medico de Familia: $this->nombre, Edad: $this->edad, Turno: $this->turno, Numero de pacientes: $this->num_pacientes</p>";
        }
    }
?>