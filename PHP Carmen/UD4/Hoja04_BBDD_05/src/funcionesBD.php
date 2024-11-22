<?php
namespace Src;

use Src\conexionBD;
use PDO;
use PDOException;

final class funcionesBD{

    static function getMedicos():array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->query("SELECT nombre, edad from medicos");
        $resultado=[];

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=['nombre'=>$registro->nombre, 'edad'=>$registro->edad];
        }

        return $resultado;
    }

    static function getTurnos():array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->query("SELECT tipo from turnos");
        $resultado=[];

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=$registro->tipo;
        }

        return $resultado;
    }

    static function getMedicosPorTurno($turno):array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->prepare("SELECT m.nombre, m.edad from medicos m join turnos t on m.turno_id=t.id where turnos.tipo=:turno");
        $consulta->bindParam(':turno', $turno, PDO::PARAM_STR);
        $consulta->execute();
        $resultado=[];

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=['nombre'=>$registro->nombre, 'edad'=>$registro->edad];
        }

        return $resultado;
    }

    static function getMedicosPorPacientes($numPacientes):array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->prepare("SELECT m.nombre, m.edad from medicos m join familia f on m.codigo=f.medico_codigo where numPacientes=:numPacientes");
        $consulta->bindParam(':numPacientes', $numPacientes, PDO::PARAM_INT);
        $consulta->execute();
        $resultado=[];

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=['nombre'=>$registro->nombre, 'edad'=>$registro->edad];
        }

        return $resultado;
    }
}
?>