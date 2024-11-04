<?php
    namespace Src;
    require_once __DIR__ . '/conexionBD.php';

    function getEquipos():array{
        $dwes = new PDO("mysql:host=localhost:3307;dbname=dwes_01_nba;charset=utf8mb4");
        $resultado = $dwes‐>query("SELECT nombre FROM equipos"); 

        return $resultado;
    }
?>