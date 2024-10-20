<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
    include_once 'Clases/familia.php';
    include_once 'Clases/urgencia.php';

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

</body>
</html>