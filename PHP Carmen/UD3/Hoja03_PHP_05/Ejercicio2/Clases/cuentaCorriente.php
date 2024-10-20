<?php
    include_once 'cuenta.php';

    class cuentaCorriente extends Cuenta{
        private $cuota_mantenimiento;

        public function __construct(int $numero, string $titular, int $saldo, int $cuota_mantenimiento){
            parent::__construct($numero, $titular, $saldo);
            $this->saldo-=$cuota_mantenimiento;
        }

        public function reintegro(int $cantidad):void{
            if($this->saldo-$cantidad>=20){
                parent::reintegro($cantidad);
            }else{
                echo "No se puede realizar el reintegro. El saldo no puede ser inferior a 20";
            }
        }

        public function mostrar():void{
            parent::mostrar(); //Llamo al metodo mostrar de la clase padre
            echo "Tiene una cuota de mantenimiento de $this->cuota_mantenimiento €</p>";
        }
    }
?>