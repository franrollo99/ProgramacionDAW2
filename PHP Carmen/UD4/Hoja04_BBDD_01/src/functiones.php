<?php
    function getEquipos(PDO $conexion):array{

        $dwes =$conexion;
        $registros = $dwes‐>query("select nombre from equipos");
        $resultado=[];
        while($registro=$registros->fetch(PDO::FETCH_ASSOC)){
            $resultado[]=$registro['nombre'];
        }

        return $resultado;
    }
?>