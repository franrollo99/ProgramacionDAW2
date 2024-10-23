<?php
    namespace Ejercicio2\clases;
    use Ejercicio2\interfaces\Encendible;

    class Bombilla implements Encendible{
        private $horasDeVida;

        public function __construct(int $horasDeVida){
            $this->horasDeVida=$horasDeVida;
        }

        public function encender():void{
            if($this->horasDeVida>1){
                echo "Bombilla encendida <br>";
                $this->horasDeVida-=2;
            }else{
                echo "No se ha podido encender la bombilla <br>";
            }
        }

        public function apagar():void{
            echo "La bombilla se ha apagado <br>";
        }
        
    }
?>