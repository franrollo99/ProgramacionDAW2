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
            if($conexion->exec('DELETE from pasajeros')==0 || $conexion->exec('UPDATE plazas set reservada=0')===0) $ok=false;

            if($ok){
                $conexion->commit(); //Si todo fue bien confirma los cambios
                echo "Se han eliminado los pasajeros correctamente";
            }else{
                $conexion->rollBack(); //Sino se revierte
                echo "No se han podido eliminar los pasajeros";
            }
        }

        static function getAsientos(){
            $conexion=conexionBD::getConnection();
            $consulta=$conexion->query('SELECT numero, precio from plazas where reservada=0');
            $resultado=[];

            while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
                $resultado[]=['numero'=>$registro->numero, 'precio'=>$registro->precio];
            }
            return $resultado;
        }

        static function reserva($nombre, $dni, $asiento){
            $conexion=conexionBD::getConnection();
            $ok=true;
            try{
                $conexion->beginTransaction(); //Inicio de la transaccion
                
                // Comprobar si el asiento ya está reservado
                $consultaAsiento = $conexion->prepare('SELECT reservada FROM plazas WHERE numero = :numero');
                $consultaAsiento->bindParam(':numero', $asiento);
                $consultaAsiento->execute();
                $asientoReservado = $consultaAsiento->fetchColumn(); //Devuelve el valor de la columna reservada del asiento seleccionado

                if ($asientoReservado == 1) {
                    echo "Error en la reserva. El asiento ya está reservado.";
                    $conexion->rollBack();
                    return;
                }
                
                //Comprobar si el DNI ya existe
                $consultaDni = $conexion->prepare('SELECT COUNT(*) FROM pasajeros WHERE dni = :dni'); //Cuenta el numero de filas con el dni
                $consultaDni->bindParam(':dni', $dni);
                $consultaDni->execute();
                $dniExiste = $consultaDni->fetchColumn(); //Devuelve el numero total de filas que coinciden con el dni

                if ($dniExiste > 0) {
                    echo "Error en la reserva. El DNI ya está registrado.";
                    $conexion->rollBack();
                    return;
                }
                
                //Insertar el pasajero en la tabla
                $insertPasajero = $conexion->prepare('INSERT INTO pasajeros (dni, nombre, sexo, numero_plaza) VALUES (:dni, :nombre, "-", :numero_plaza)');
                $insertPasajero->bindParam(':dni', $dni);
                $insertPasajero->bindParam(':nombre', $nombre);
                $insertPasajero->bindParam(':numero_plaza', $asiento);
        
                if (!$insertPasajero->execute()) {
                    $ok = false;
                }

                //Actualizar la tabla plazas
                $updatePlaza = $conexion->prepare('UPDATE plazas SET reservada = 1 WHERE numero = :numero');
                $updatePlaza->bindParam(':numero', $asiento);

                if (!$updatePlaza->execute()) {
                    $ok = false;
                }

                if ($ok) {
                    $conexion->commit();
                    echo "Se ha reservado el asiento $asiento correctamente.";
                } else {
                    $conexion->rollBack();
                    echo "Error en la reserva. Inténtelo de nuevo.";
                }
            }catch(PDOException $e){
                
            }
            
        }

    }
?>