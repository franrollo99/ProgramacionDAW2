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

            $consultaCodigo = $dwes->query("SELECT max(codigo)+1 FROM jugadores");

            $siguienteCodigo = $consultaCodigo -> fetchColumn(); //Obtenemos el valor de la columna

            $insertado = $dwes->exec("INSERT INTO jugadores (codigo, nombre, procedencia, altura, peso, posicion, nombre_equipo) VALUES ('$siguienteCodigo', '$nombre', '$procedencia', '$altura', '$peso', '$posicion', '$equipo')");
            return $insertado > 0;
        }

        // try{
            //     // $conexion->comit();
            // // return "conexion exitosa";
            // }catch(Exception $e)
            // // $conexion->rollBack();
            // // return "error en la transaccion: $e


            // mejor en usarlo asi
            // prepare
            // bindParam
            // execute

        
    }
?>