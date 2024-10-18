<?php
    require_once __DIR__ . '/../src/funcionesBD.php';

    $equipos=getEquipos();

    foreach($equipos as $equipo){
        echo $equipo . "<br>";
    }
?>