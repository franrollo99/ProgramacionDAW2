<?php
    class Coche{
        private $matricula;
        private $velocidad;

        public function __construct($matricula, $velocidad){
            $this->matricula=$matricula;
            $this->velocidad=$velocidad;
        }

        public function setMatricula(string $matricula): void{
            $this->matricula=$matricula;
        }

        public function getmatricula(): string{
            return $this->matricula;
        }

        public function setVelocidad(int $velocidad): void{
            $this->velocidad=$velocidad;
        }

        public function getVelocidad(): int{
            return $this->velocidad;
        }

        public function acelera(int $incremento): void{
            $nuevaVelocidad=$this->velocidad+$incremento;

            if($nuevaVelocidad>120){
                $this->velocidad=120;
            }else{
                $this->velocidad=$nuevaVelocidad;
            }
        }

        public function frena(int $decremento): void{
            $nuevaVelocidad=$this->velocidad-$decremento;

            if($nuevaVelocidad<0){
                $this->velocidad=0;
            }else{
                $this->velocidad=$nuevaVelocidad;
            }
        }

        public function mostrarInfo(): void{
            echo "Matricula " . $this->getMatricula() . "<br>";
            echo "Velocidad " . $this->getVelocidad() . "km/h";
        }
    }
?>