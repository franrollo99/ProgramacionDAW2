<?php
    namespace Src;

    use Src\conexionBD;
    use PDO;
    use PDOException;

    final class funcionesBD{
        static function getEquipos():array{
            $dwes = conexionBD::getConnection();
            $registros = $dwes->query("SELECT nombre from equipos");
            $resultado=[];
            while($registro=$registros->fetch(PDO::FETCH_OBJ)){
                $resultado[]=$registro->nombre;
            }
    
            return $resultado;
        }

        static function getJugadores():array{
            $dwes = conexionBD::getConnection();
            $registrosJugadores=$dwes->query("SELECT nombre from jugadores");
            $resultadoJugadores=[];
            while($registroJugadores=$registroJugadoress->fetch(PDO::FETCH_OBJ)){
                $resultadoJugadores[]=$registroJugadores->nombre;
            }
        }
    }
?>