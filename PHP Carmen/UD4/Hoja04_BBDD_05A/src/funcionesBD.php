<?php
namespace Src;

use Src\conexionBD;
use PDO;
use PDOException;

final class funcionesBD{

    static function getMedicos():array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->query("SELECT m.codigo, m.nombre, m.edad, m.turno_id, f.numPacientes, u.unidad from medicos m join turnos t on m.turno_id=t.id left join familia f on m.codigo=f.medico_codigo left join urgencias u on m.codigo=u.medico_codigo");
        $resultado=[];
        $turnos=self::getTurnos();
        

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $turnoMedico=null;
            $encontrado=false;

            for($i=0; $i<count($turnos) && !$encontrado; $i++){
                if($turnos[$i]->getId()===$registro->turno_id){
                    $turnoMedico=$turnos[$i];
                    $encontrado=true;
                }
            }

            // foreach($turnos as $turno){
            //     if($turno->getId()===$registro->turno_id){
            //         $turnoMedico=$turno;
            //     }
            // }

            if($registro->unidad==null){
                $resultado[]=new Familia($registro->codigo, $registro->nombre, $registro->edad, $turnoMedico, $registro->numPacientes);
            }else{
                $resultado[]=new Urgencia($registro->codigo, $registro->nombre, $registro->edad, $turnoMedico, $registro->unidad);
            }
        }

        return $resultado;
    }

    static function getTurnos():array{
        $conexion=conexionBD::getConexion();
        $consulta=$conexion->query("SELECT id, tipo from turnos");
        $resultado=[];

        while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
            $resultado[]=new Turno($registro->id, $registro->tipo);
        }

        return $resultado;
    }

    static function getMedicosPorTurno(int $turno):array{
        $resultado=[];
        $medicos=self::getMedicos();

        foreach($medicos as $medico){
            if($medico->getTurno()->getId()===$turno){
                $resultado[]=$medico;
            }
        }
        return $resultado;
    }

    static function getMedicosPorPacientes(int $numPacientes):array{
        $resultado=[];
        $medicos=self::getMedicos();

        foreach($medicos as $medico){
            // Verifico si cada medico tiene el metodo getNumPacientes, si es así entonces 
            // es un medico de familia y se realiza la comparacion de numero de pacientes
            // if(method_exists($medico, 'getNumPacientes')){
            if($medico instanceof Familia){
                if($medico->getNumPacientes()==$numPacientes){
                    $resultado[]=$medico;
                }
            }
        }
        
        return $resultado;
    }
}
?>