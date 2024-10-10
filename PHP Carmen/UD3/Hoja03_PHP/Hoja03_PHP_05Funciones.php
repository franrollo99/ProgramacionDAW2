<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <!-- EJERCICIO 1 -->
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

        class Encargado extends Empleado{
            public function __construct(int $sueldo){
                parent::__construct($sueldo*1.15);
            }

            public function getSueldo(): int{
                return parent::getSueldo();
            }
        }
     ?>



     <!-- EJERCICIO 2 -->
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



    <!-- EJERCICIO 3 -->
    <?php
        abstract class Medico{
            protected $nombre;
            protected $edad;
            protected $turno;

            public function __construct(string $nombre, int $edad, string $turno){
                $this->nombre=$nombre;
                $this->edad=$edad;
                $this->turno=$turno;
            }

            abstract public function mostrarDatos():void;
            
            //metodos GET de edad y turno para obtener el numero de medicos con mas de 60 años en turno de tarde
            public function getEdad():int{
                return $this->edad;
            }

            public function getTurno():string{
                return $this->turno;
            }

        }

        class Familia extends Medico{
            private $num_pacientes;

            public function __construct(string $nombre, int $edad, string $turno, int $num_pacientes){
                parent::__construct($nombre, $edad, $turno);
                $this->num_pacientes=$num_pacientes;
            }

            public function getNuMPacientes():int{
                return $this->num_pacientes;
            }

            //Mostrarlos datos del medico de familia
            public function mostrarDatos():void{
                echo "<p>Medico de Familia: $this->nombre, Edad: $this->edad, Turno: $this->turno, Numero de pacientes: $this->num_pacientes</p>";
            }
        }

        class Urgencia extends Medico{
            private $unidad;

            public function __construct(string $nombre, int $edad, string $turno, string $unidad){
                parent::__construct($nombre, $edad, $turno);
                $this->unidad=$unidad;
            }

            public function mostrarDatos():void{
                echo "<p>Medico de Urgencia: $this->nombre, Edad: $this->edad, Turno: $this->turno, Unidad: $this->unidad</p>";
            }
        }
    ?>



    <!-- EJERCICIO 4 -->
    <?php
        abstract class Productos{
            protected $codigo;
            protected $precio;
            protected $nombre;

            public function __construct(int $codigo, float $precio, string $nombre){
                $this->codigo=$codigo;
                $this->precio=$precio;
                $this->nombre=$nombre;
            }

            abstract public function mostrarDatos():void;

            public function getPrecio():float{
                return $this->precio;
            }
        }

        class Alimentacion extends Productos{
            private $fechaCaducidad;

            public function __construct(int $codigo, float $precio, string $nombre, string $fechaCaducidad){
                parent::__construct($codigo, $precio, $nombre);
                $this->fechaCaducidad=$fechaCaducidad;
            }

            public function mostrarDatos():void{
                echo "<p>Nombre del alimento: $this->nombre, Precio del producto: $this->precio €, Fecha de caducidad: $this->fechaCaducidad</p>";
            }
        }

        class Electronica extends Productos{
            private $plazoGarantia;

            public function __construct(int $codigo, float $precio, string $nombre, string $plazoGarantia){
                parent::__construct($codigo, $precio, $nombre);
                $this->plazoGarantia=$plazoGarantia;
            }

            public function mostrarDatos():void{
                echo "<p>Nombre del electrodomestico: $this->nombre, Precio del producto: $this->precio €, Plazo de garantia: $this->plazoGarantia</p>";
            }
        }
    ?>
</body>
</html>