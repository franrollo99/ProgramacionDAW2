<?php
    class Monedero{
        private $dinero; //Euros, sin centimos, sino seria float
        private static $numeroMonederos=0;

        public function __construct(int $dineroInicial=0){
            $this->dinero=$dineroInicial;
            self::$numeroMonederos++;
        }

        public function __destruct()
        {
            self::$numeroMonederos--; //Decrementa el numero de monederos cuando se 
        }

        public function meterDinero(int $cantidad):void{
            if($cantidad>0){
                $this->dinero+=$cantidad;
            }else{
                echo "La cantidad debe ser mayor que 0";
            }
        }

        public function sacarDinero(int $cantidad):void{
            if($cantidad>0 || $cantidad<$this->dinero){
                $this->dinero-=$cantidad;
            }else if($cantidad>$this->dinero){
                echo "Cantidad no valida para sacar, puedes sacar " . $this->dinero . "€ o menos";
            }else{
                echo "La cantidad debe ser mayor que 0";
            }
        }

        public function mostrarDinero():int{
            return $this->dinero;
        }

        public static function cantidadMonederos():int{
            return self::$numeroMonederos;
        }
    }
?>