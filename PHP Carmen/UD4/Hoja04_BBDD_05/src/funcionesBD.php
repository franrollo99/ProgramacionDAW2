<?php
namespace Src;

use Src\conexionBD;
use PDO;
use PDOException;

final class funcionesBD{

    static function getTurnos():array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->query("SELECT tipo from turnos");
        $resultado=[];

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=$registro->tipo;
        }

        return $resultado;
    }
}
?>