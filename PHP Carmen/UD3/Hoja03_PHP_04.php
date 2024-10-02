<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 04</h1>

    <h3>Ejercicio 1</h3>
    <?php

    include funciones.php;
        class Circulo{
            private $radio;

            public function setRadio(float $radio): void{

            }

            public function getRadio(): float{
                return $this->radio;
            }

            //magico set
            public function __set($name, $value):void{
                $this->name=$value;
            }

            //magico get
            public function __get($name): mixed{
                return $this->value;
            }
        }

        //Crear un objeto de la clase circulo
        $circulo=new Circulo(radio:9);
    ?>

    <br><br><br>
    
    <h3>Ejercicio 2</h3>
    <?php

    ?>

    <br><br><br>
    
    <h3>Ejercicio 3</h3>
    <?php

    ?>

    <br><br><br>
</body>
</html>