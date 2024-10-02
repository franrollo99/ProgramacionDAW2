<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>

<h3>Ejercicio 1</h3>
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

            //gerRadio
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


<h3>Ejercicio 2</h3>
    <?php
        class Coche{
            private $matricula;
            private $velocidad;

            public function __construct($matricula, $velocidad){
                $this->matricula=$matricula;
                $this->velocidad=$velocidad;
            }

            public function setMatricula(string $matricula){
                $this->matricula=$matricula;
            }
        }
    ?>
</body>
</html>