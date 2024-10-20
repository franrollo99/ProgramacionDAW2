<?php
    class Empleado{
        private $sueldo;

        public function __construct(int $sueldo){
            $this->sueldo=$sueldo;
        }
            
        public function setSueldo(int $sueldo): void{
            $this->sueldo=$sueldo;
        }
        public function getSueldo():int{
            return $this->sueldo;
        }
    }
?>