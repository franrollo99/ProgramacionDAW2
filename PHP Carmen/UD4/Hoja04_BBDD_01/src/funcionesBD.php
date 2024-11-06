<?php
    namespace Src;

    use Src\conexionBD;
    use PDO;
    use PDOException;

    final class funcionesBD{
        function getEquipos():array{
            $dwes = ConexionBD::getConection();
            $registros = $dwes‐>query("SELECT nombre FROM equipos");
            $resultado=[];
            while($registro=$registros->fetch(PDO::FETCH_ASSOC)){
                $resultado[]=$registro['nombre'];
            }
    
            return $resultado;
        }
    }
?>