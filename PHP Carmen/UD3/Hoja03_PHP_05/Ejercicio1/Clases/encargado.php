<?php
    class Encargado extends Empleado{
        public function __construct(int $sueldo){
            parent::__construct($sueldo*1.15);
        }

        public function getSueldo(): int{
            return parent::getSueldo();
        }
    }
?>