<?php
    class Cuenta{
        protected $numero;
        protected $titular;
        protected $saldo;

        public function __construct(int $numero, string $titular, int $saldo){
            $this->numero=$numero;
            $this->titular=$titular;
            $this->saldo=$saldo;
        }

        public function ingreso(int $cantidad):void{
            $this->saldo+=$cantidad;
        }

        public function reintegro(int $cantidad):void{
            $this->saldo-=$cantidad;
        }

        public function esPreferencial(int $cantidad):bool{
            if($this->saldo>$cantidad){
                return true;
            }else{
                return false;
            }
        }

        public function mostrar():void{
            echo "<p>El titular de la cuenta con numero $this->numero es $this->titular, y tiene un saldo de $this->saldo €</p>";
        }
    }
?>