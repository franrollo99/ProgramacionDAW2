<?php
    namespace Src;

    use Src\conexionBD;
    use PDO;
    use PDOException;

    final class funcionesBD{

        static function llegada(){
            $conexion=conexionBD::getConnection();
            $ok=true;
            $conexion->beginTransaction(); //Deshabilito el modo autocommit
            if($conexion->exec('DELETE from pasajeros')==0 || $conexion->exec('UPDATE pasajeros set reservada=0')==0) $ok=false;

            if($ok)$conexion->commit(); //Si todo fue bien confirma los cambios
            else $conexion->rollBack(); //Sino reviertelo


        }

    }


?>