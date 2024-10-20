<?php
    class Circulo{
        private $radio;

        public function __construct($radio){
            $this->radio=$radio;
        }

        //setRadio
        public function setRadio(float $radio): void{
            $this->radio=$radio;
        }

        //getRadio
        public function getRadio(): float{
            return $this->radio;
        }

        //magico set
        public function __set($nombre, $valor):void{
            $this->$nombre=$valor;
        }

        //magico get
        public function __get($nombre): mixed{
            return $this->$nombre;
        }
    }
?>