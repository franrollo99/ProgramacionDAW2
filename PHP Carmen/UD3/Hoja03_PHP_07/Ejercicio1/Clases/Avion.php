<?php
    include_once 'Aeropuerto.php';

    class Avion extends ElementoVolador{
        private $companiaAerea;
        private $fechaAlta;
        private $altitudMaxima;

        public function __construct(string $nombre, int $numAlas, int $numMotores, string $companiaAerea, string $fechaAlta, int $altitudMaxima){
            parent::__construct($nombre, $numAlas, $numMotores);
            $this->companiaAerea=$companiaAerea;
            $this->fechaAlta=$fechaAlta;
            $this->altitudMaxima=$altitudMaxima;
        }

        public function setCompaniaAerea(string $companiaAerea):void{
            $this->companiaAerea=$companiaAerea;
        }
        public function getCompaniaAerea():string{
            return $this->companiaAerea;
        }

        public function setFechaAlta(string $fechaAlta):void{
            $this->fechaAlta=$fechaAlta;
        }
        public function getFechaAlta():string{//Fecha tipo string
            return $this->fechaAlta;
        }

        public function mostrarInformacion():void{
            echo "<p>Nombre: $this->nombre, Numero de alas: $this->numAlas, Numero de motores: $this->numMotores, Compañia aerea: $this->companiaAerea, Fecha alta: $this->fechaAlta, Altitud maxima: $this->altitudMaxima</p>";
        }

        public function volar($altitud):void{
            if($altitud<0 || $altitud>$this->altitudMaxima){
                echo "Error: la altitud $altitud no es valida. Debe estar entre 0 y $this->altitudMaxima metros <br>";
                return;
            }

            if($this->velocidad<150){
                echo "Error: la velocidad es de $this->velocidad km/h. No se puede volar a menos de 150km/h <br>";
                return;
            }

            //Incrementa la altitud en pasos de 100m
            while($this->altitud<$altitud){
                $this->altitud+=100;
                echo "Subiendo, altitud actual: $this->altitud metros <br>";
                if($this->altitud>$altitud){
                    $this->altitud=$altitud;
                }
            }
            echo "El avion ha alcanzado la altitud deseada de $altitud metros <br>";
        }
    }
?>