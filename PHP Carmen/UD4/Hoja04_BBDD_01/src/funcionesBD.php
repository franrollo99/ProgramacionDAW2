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

        static function getJugadores(string $equipo): array {
            $dwes = conexionBD::getConnection();
            $stmt = $dwes->prepare("SELECT nombre FROM jugadores WHERE equipo = :equipo");
            $stmt->execute(['equipo' => $equipo]);
            
            $resultadoJugadores = [];
            while ($registroJugadores = $stmt->fetch(PDO::FETCH_OBJ)) {
                $resultadoJugadores[] = $registroJugadores->nombre;
            }
            
            return $resultadoJugadores;
        }
    }
?>