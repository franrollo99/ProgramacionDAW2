<?php
    include_once 'cuenta.php';

    class CuentaAhorro extends Cuenta{
        private $comision_apertura;
        private $intereses;

        public function __construct(int $numero, string $titular, int $saldo, int $comision_apertura, int $intereses){
            parent::__construct($numero, $titular, $saldo);
            $this->saldo-=$comision_apertura;
            $this->intereses-=$intereses;
        }

        public function aplicaInteres(){
            $this->saldo*=(1+$this->intereses/100); //Aplica los intereses
        }

        public function mostrar():void{
            parent::mostrar();
            echo "Tiene una comision de apertura de $this->comision_apertura, y tiene unos intereses de $this->intereses";
        }
    }
?>