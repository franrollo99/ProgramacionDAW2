<?php
    include_once 'Aeropuerto.php';

    class Helicoptero extends ElementoVolador{
        private $propietario;
        private $nRotor;

        public function __construct(string $nombre, int $numAlas, int $numMotores, string $propietario, int $nRotor){
            parent::__construct($nombre, $numAlas, $numMotores);
            $this->propietario=$propietario;
            $this->nRotor=$nRotor;
        }

        public function setPropietario(string $propietario):void{
            $this->propietario=$propietario;
        }
        public function getPropietario():string{
            return $this->propietario;
        }

        public function setNRotor(int $nRotor):void{
            $this->nRotor=$nRotor;
        }
        public function getNRotor():int{
            return $this->nRotor;
        }

        public function mostrarInformacion():void{
            echo "<p>Nombre: $this->nombre, Numero de alas: $this->numAlas, Numero de motores: $this->numMotores, Propietario: $this->propietario, Numero de rotores: $this->nRotor</p>";
        }

        public function volar($altitudFinal){
            $altitudMaxima=100*$this->nRotor;

            if($altitudFinal>$altitudMaxima){
                echo "Error: La altitud maxima permitida es $altitudMaxima";
                return;
            }
            
            while($this->altitud<$altitudFinal){
                $this->altitud+=20;
                if($this->altitud>$altitudFinal){
                    $this->altitud=$altitudFinal;
                }
            }
            echo "El helicoptero ha alcanzado la altitud deseada de $altitudFinal";
        }
    }
?>