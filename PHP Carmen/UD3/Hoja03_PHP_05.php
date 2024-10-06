<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 05</h1>

    <h3>Ejercicio 1</h3>
    <?php
        include 'Hoja03_PHP_05Funciones.php';

        $empleado=new Empleado(1500);
        echo "El sueldo de un empleado normal es de " . $empleado->getSueldo() . "€<br>";

        $encargado=new Encargado(1500);
        echo "El sueldo del encargado es de " . $encargado->getSueldo() . "€";
    ?>

    <br><br><br>

    <h3>Ejercicio 2</h3>
    <?php
        $cuenta=new Cuenta(12345, "Fran", 12000);
        $cuenta->mostrar();

        $cuentaCorriente=new cuentaCorriente(54321, "Maria", 2000, 50);
        $cuentaCorriente->mostrar();
        $cuentaCorriente->reintegro(500);

        $cuentaAhorro=new CuentaAhorro(98776, "Marcelo", 5000, 30, 3);
        $cuentaAhorro->mostrar();
        $cuentaAhorro->aplicaInteres();
        $cuentaAhorro->mostrar();
    ?>

    <br><br><br>

    <h3>Ejercicio 3</h3>
    <?php
        $medicos=[
            new Familia("Fran", 25, "tarde", 5),
            new Familia("Maria", 65, "tarde", 19),
            new Familia("Mario", 50, "mañana", 3),
            new Urgencia("Pepe", 68, "tarde", "cardiologia"),
            new Urgencia("Tomas", 59, "tarde", "traumatologia"),
            new Urgencia("Lucia", 61, "mañana", "cardiologia"),
            new Urgencia("Felipe", 68, "tarde", "cardiologia")
        ];

        for($i=0; $i<count($medicos); $i++){
            $medicos[$i]->mostrarDatos();
        }

        echo "<br>";

        $urgenciasMas60=0;
        for($i=0; $i<count($medicos); $i++){
            //Con "instanceof" comprobamos si el objeto es de una clase determinada
            if($medicos[$i] instanceof Urgencia && $medicos[$i]->getTurno()=="tarde" && $medicos[$i]->getEdad()>60){
                $urgenciasMas60++;
            }
        }
        echo "Hay $urgenciasMas60 medicos de urgencias con mas de 60 años en turno de tarde <br><br>";


        $numMinimoPacientes=5;
        echo "Los datos de los medicos que tienen $numMinimoPacientes o mas pacientes: <br>";

        foreach($medicos as $medico){
            if($medico instanceof Familia && $medico->getNuMPacientes()>=$numMinimoPacientes){
                $medico->mostrarDatos();
            }
        }
    ?>

    <br><br><br>

    <h3>Ejercicio 4</h3>
    <?php
        $cestaCompra=[
            new Alimentacion(1, 23.29, "Platano", "3-12-2025"),
            new Alimentacion(2, 33.79, "Sandia", "4-1-2025"),
            new Alimentacion(3, 43.69, "Melon", "6-7-2025"),
            new Alimentacion(4, 3.99, "Manzana", "21-4-2025"),
            new Alimentacion(5, 4.29, "Pera", "15-6-2025"),
            new Electronica(6, 400.29, "PS4 Pro", "2 años"),
            new Electronica(7, 720.29, "PS5 Slim", "3 años"),
            new Electronica(8, 900.29, "PS5 Pro", "4 años"),
            new Electronica(9, 2259.29, "Ordenador Gaming", "5 años"),
            new Electronica(10, 1339.29, "Television 4k", "10 años")
        ];

        $precioAlimientos=0;
        $precioElectronica=0;

        echo "Cesta de la compra:<br>";

        foreach($cestaCompra as $producto){
            $producto->mostrarDatos();
            if($producto instanceof Alimentacion && $producto->getPrecio()){
                $precioAlimientos+=$producto->getPrecio();
            }else if($producto instanceof Electronica && $producto->getPrecio()){
                $precioElectronica+=$producto->getPrecio();
            }
        }

        echo "Se ha gastado un total de " . ($precioAlimientos+$precioElectronica) . "€<br>";
        echo "En alimentacion se ha gastado $precioAlimientos €<br>";
        echo "En electronica se ha gastado $precioElectronica €<br>";

    ?>

    <br><br><br>
</body>
</html>