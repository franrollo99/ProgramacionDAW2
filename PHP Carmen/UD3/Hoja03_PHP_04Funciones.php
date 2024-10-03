<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>

    <!-- <h3>Ejercicio 1</h3> -->
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



    <!-- <h3>Ejercicio 2</h3> -->
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



    <!-- <h3>Ejercicio 3</h3> -->
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

</body>
</html>