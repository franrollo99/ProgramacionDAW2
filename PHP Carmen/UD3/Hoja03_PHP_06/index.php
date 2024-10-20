<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

    <?php
        include_once 'Clases/ElementoVolador.php';
        include_once 'Clases/Avion.php';
        include_once 'Clases/Helicoptero.php';

        $aeropuerto=new Aeropuerto();
        $avion1=new Avion("Avioneto", 2, 4, "Ryanair", "2-3-2023", 2000);
        $avion2=new Avion("Avioncito", 4, 1, "Iberia", "6-3-2012", 500);
        $avion3=new Avion("Avionaco", 4, 8, "Vueling", "5-10-2024", 5000);
        $helicoptero1=new Helicoptero("Gorrocoptero", 0, 1, "Pepe", 1);
        $helicoptero2=new Helicoptero("Supercoptero", 0, 1, "Pepe", 4);
        $helicoptero3=new Helicoptero("Helicoptero Apache", 0, 1, "Pepe", 2);

        $aeropuerto->insertar($avion1);
        $aeropuerto->insertar($avion2);
        $aeropuerto->insertar($avion3);
        $aeropuerto->insertar($helicoptero1);
        $aeropuerto->insertar($helicoptero2);
        $aeropuerto->insertar($helicoptero3);

        echo "<br>Buscamos un avion con el nombre de Avioneto: ";
        $aeropuerto->buscar("Avioneto");

        echo "Buscamos un avion que no existe: ";
        $aeropuerto->buscar("Avion");

        echo "<br><br>Buscamos una compañia que exista: ";
        $aeropuerto->listarCompania("Vueling");

        echo "Buscamos una compañia que no exista: ";
        $aeropuerto->listarCompania("Compania");

        echo "<br>Buscamos un helicoptero con 4 rotores: ";
        $aeropuerto->rotores(4);

        echo "Buscamos un helicoptero con 6 rotores que no existe: ";
        $aeropuerto->rotores(6);

        echo "<br>Hacemos volar un avion que no puede superar los 500m: ";
        $aeropuerto->despegar("Avioncito", 1000, 100);

        echo "<br>Hacemos volar un avion que cumple con la altura pero no la velocidad: ";
        $aeropuerto->despegar("Avioneto", 1000, 100);

        echo "<br>Hacemos volar un avion: ";
        $aeropuerto->despegar("Avionaco", 3000, 180);
        
        echo "<br>Hacemos volar un helicoptero que tiene la altura limitada a 200: ";
        $aeropuerto->despegar("Helicoptero Apache", 500, 150);

        echo "<br>Hacemos volar un helicoptero: ";
        $aeropuerto->despegar("Supercoptero", 300, 150);
    ?>
    
</body>
</html>