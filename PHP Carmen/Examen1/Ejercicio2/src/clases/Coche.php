<?php
    namespace Ejercicio2\clases;
    use Ejercicio2\interfaces\Encendible;


    class Coche implements Encendible{
        private int $gasolina;
        private int $bateria;
        private bool $estado;

        public function __construct(){
            $this->gasolina=0;
            $this->bateria=10;
            $this->estado=false;
        }

        public function encender():void{
            if($this->gasolina>0 && $this->bateria>0 && !$this->estado){
                $this->estado=true;
                $this->gasolina--;
                $this->bateria--;
                echo "Coche encendido <br>";
            }else{
                echo "No se ha podido encender el coche <br>";
            }
        }

        public function apagar():void{
            if($this->estado){
                $this->estado=false;
                echo "Coche apagado <br>";
            }else{
                echo "El coche ya esta apagado <br>";
            }
        }

        public function repostar(int $litros):void{
            $this->gasolina=$litros;
        }
    }
?>