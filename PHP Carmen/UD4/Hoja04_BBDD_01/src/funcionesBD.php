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
            while ($registro = $registros->fetch(PDO::FETCH_OBJ)){
                $resultado[] = $registro->nombre;
            }
    
            return $resultado;
        }

        static function getJugadores(string $equipo): array {
            $dwes = conexionBD::getConnection();
            $registros = $dwes->query("SELECT nombre from jugadores where nombre_equipo = '$equipo'");
            $resultadoJugadores = [];

            while ($registroJugadores = $registros->fetch(PDO::FETCH_OBJ)) {
                $resultadoJugadores[] = $registroJugadores->nombre;
            }
            
            return $resultadoJugadores;
        }

        // static function getPeso(string $equipo): array {
        //     $dwes = conexionBD::getConnection();
        //     $registros = $dwes->query("SELECT peso from jugadores where nombre_equipo = '$equipo'");
        //     $resultadoJugadores = [];

        //     while ($registroJugadores = $registros->fetch(PDO::FETCH_OBJ)) {
        //         $resultadoJugadores[] = $registroJugadores->peso;
        //     }
            
        //     return $resultadoJugadores;
        // }

        static function getJugadoresConPeso(string $equipo):array{
            $dwes = conexionBD::getConnection();
            $consulta = $dwes->query("SELECT nombre, peso from jugadores where nombre_equipo = '$equipo'");
            $resultado = [];

            while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
                $resultado[] = ['nombre' => $registro->nombre, 'peso' => $registro->peso];
            }

            return $resultado;
        }

        static function deleteJugador(string $equipo, string $jugador): bool{
            $dwes = conexionBD::getConnection();
            // exec devuelve el numero de filas afectadas
            $borrado = $dwes->exec("DELETE from jugadores where nombre = '$jugador' and nombre_equipo = '$equipo'");
            return $borrado > 0; //Si se ha eliminado al menos un jugador devuelve true
        }

        static function addJugador(string $equipo, string $nombre, string $procedencia, int $altura, int $peso, string $posicion): bool{
            $dwes = conexionBD::getConnection();
            $insertado = $dwes->exec("INSERT INTO jugadores (nombre, procedencia, altura, peso, posicion, nombre_equipo) VALUES ('$nombre', '$procedencia', '$altura', '$peso', '$posicion', '$equipo')");
            return $insertado > 0;
        }

        public static function actualizarPesoJugador($idJugador, $pesoNuevo) {
            
            $sql = "UPDATE jugadores SET peso = :peso WHERE id = :idJugador";
            $stmt = $db->prepare($sql);
            $stmt->bindParam(':peso', $pesoNuevo);
            $stmt->bindParam(':idJugador', $idJugador);
            
            return $stmt->execute();
        }
    }
?>