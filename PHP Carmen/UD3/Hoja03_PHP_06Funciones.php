<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <?php
        interface Volador{
            public function acelerar($velocidad);
        }

        abstract class ElementoVolador implements Volador{
            private $nombre;
            private $numAlas;
            private $numMotores;
            private $altitud;
            private $velocidad;

            public function __construct(string $nombre, int $numAlas, int $numMotores, int $altitudInicial=0, int $velocidadInicial=0){
                $this->nombre=$nombre;
                $this->numAlas=$numAlas;
                $this->numMotores=$numMotores;
                $this->altitud=$altitudInicial;
                $this->velocidad=$velocidadInicial;
            }

            public function setNombre(string $nombre):void{
                $this->nombre=$nombre;
            }
            public function getNombre():string{
                return $this->nombre;
            }

            public function setNumAlas(int $numAlas):void{
                $this->numAlas=$numAlas;
            }
            public function getNumAlas():int{
                return $this->numAlas;
            }
            
            public function setNumMotores(int $numMotores):void{
                $this->numMotores=$numMotores;
            }
            public function getNumMotores():int{
                return $this->numMotores;
            }

            public function volando($altitud):bool{
                $volando=false;
                if($altitud>0){
                    $volando=true;
                }

                return $volando;
            }

            public function acelerar($velocidad):void{
                Volador::acelerar();
                $this->velocidad=$velocidad;
            }

            abstract function volar($altitud);

            abstract function mostrarInformacion();
        }

        class Avion extends ElementoVolador{
            private $companiaAerea;
            private $fechaAlta;
            private $altitudMaxima;

            public function __construct(string $nombre, int $numAlas, int $numMotores, int $altitudInicial=0, int $velocidadInicial=0, string $companiaAerea, string $fechaAlta, int $altitudMaxima){
                parent::__construct($nombre, $numAlas, $numMotores, $altitudInicial, $velocidadInicial);
                $this->companiaAerea=$companiaAerea;
                $this->fechaAlta=$fechaAlta;
                $this->altitudMaxima=$altitudMaxima;
            }

            public function setCompaniaAerea(string $companiaAerea):void{
                $this->companiaAerea=$companiaAerea;
            }
            public function getCompaniaAerea():string{
                return $this->companiaAerea;
            }

            public function setFechaAlta(string $fechaAlta):void{ //Fecha tipo string
                $this->fechaAlta=$fechaAlta;
            }
            public function getFechaAlta():string{
                return $this->fechaAlta;
            }

            public function volar($altitud){
                $comprobarAltitud=true;

                if($altitud>0 && $altitud<$altitudMaxima){
                    $comprobarAltitud=false;
                }

                if($comprobarAltitud==true || $velocidad>=150){
                    $altitud+=100;
                }

                //operaciones
                //o mensaje de error
            }

            public function monstrarInformacion(){
                //Mostrar toda la info
            }

        }

        class helicoptero extends ElementoVolador{
            private $propietario;
            private $nRotor;

            public function __construct(string $nombre, int $numAlas, int $numMotores, int $altitudInicial=0, int $velocidadInicial=0, string $propietario, int $nRotor){
                parent::__construct($nombre, $numAlas, $numMotores, $altitudInicial, $velocidadInicial);
                $this->propietario=$propietario;
                $this->nRotor=$nRotor;
            }

            public function setPropietario(string $propietario):void{
                $this->propietario=$propietario;
            }
            public function getPropietario():string{
                return $this->propietario;
            }

            public function setNRotor(int $nRotor):void{
                $this->nRotor=$nRotor;
            }
            public function getNRotor():int{
                return $this->nRotor;
            }

            public function volar($altitudFinal){
                $comprobarAltitud=true;

                if(($altitudFinal/$nRotor)>100){
                    $comprobarAltitud=false;
                }
                
                do{
                    $altitud+=20;
                }while($altitud<=$altitudFinal);
            }

            public function mostrarInformacion(){
                //Mostrar info
            }
        }

        class Aeropuerto{
            private $elementosVoladores;

            public function __construct(array $elementosVoladores){
                $this=>elementosVoladores=$elementosVoladores;
            }
        }


        
    ?>
</body>
</html>