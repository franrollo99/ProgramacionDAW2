<?php

namespace Src;

use Src\conexionBD;
use PDO;
use PDOException;
// 
final class funcionesBD
{

    static function registro(string $usuario, string $contraseña):bool{
        $conexion=conexionBD::getConnection();
        $contraseñaEncriptada=password_hash($contraseña, PASSWORD_BCRYPT);

        $consulta=$conexion->prepare("INSERT INTO usuarios (usuario, contraseña) VALUES (:usuario, :contraseña)");
        $consulta->bindParam(":usuario", $usuario, PDO::PARAM_STR);
        $consulta->bindParam(":contraseña", $contraseña, PDO::PARAM_STR);
        return $consulta->execute();
    }

    static function llegada()
    {
        $conexion = conexionBD::getConnection();

        $ok = true;
        $conexion->beginTransaction(); //Deshabilito el modo autocommit y empiezo una transaccion

        if ($conexion->exec('DELETE from pasajeros') == 0 || $conexion->exec('UPDATE plazas set reservada=0') === 0) $ok = false;

        if ($ok) {
            $conexion->commit(); //Si todo fue bien confirma los cambios
            echo "Se han eliminado los pasajeros correctamente";
        } else {
            $conexion->rollBack(); //Sino se revierte
            echo "No se han podido eliminar los pasajeros";
        }
    }



    static function getAsientos()
    {
        $conexion = conexionBD::getConnection();

        $consulta = $conexion->query('SELECT numero, precio from plazas where reservada=0');
        $resultado = [];

        while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
            $resultado[] = ['numero' => $registro->numero, 'precio' => $registro->precio];
        }
        return $resultado;
    }



    static function getPlazas()
    {
        $conexion = conexionBD::getConnection();

        $consulta = $conexion->query('SELECT numero, precio from plazas');
        $resultado = [];

        while ($registro = $consulta->fetch(PDO::FETCH_OBJ)) {
            $resultado[] = ['numero' => $registro->numero, 'precio' => $registro->precio];
        }
        return $resultado;
    }



    static function actualizarPrecios($precios)
    {
        $conexion = conexionBD::getConnection();

        $ok = true;
        $conexion->beginTransaction();

        foreach ($precios as $numeroAsiento => $nuevoPrecio) {

            try {
                $updatePrecio = $conexion->prepare("UPDATE plazas SET precio = :precio WHERE numero = :numero");
                $updatePrecio->bindParam(':precio', $nuevoPrecio);
                $updatePrecio->bindParam(':numero', $numeroAsiento);

                if (!$updatePrecio->execute()) {
                    throw new PDOException("No se pudo actualizar el precio del asiento $numeroAsiento.");
                }
            } catch (PDOException $e) {
                echo "Error al actualizar el precio para el asiento $numeroAsiento: " . $e->getMessage() . "<br>";
                $ok = false;
            }
        }

        if ($ok) {
            $conexion->commit();
            //Hay que recargar manualmente para ver que se han actualizado los datos
            echo "Los precios han sido actualizados correctamente.<br>";
        } else {
            $conexion->rollBack();
            echo "Hubo un error al actualizar los precios. Los cambios no se guardaron.<br>";
        }
    }



    static function reserva($nombre, $dni, $asiento)
    {
        $conexion = conexionBD::getConnection();

        $ok = true;

        try {
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
            //Tambien se puede hacer sin count y usar $consultaDni->rowCount();
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
            $insertPasajero->bindParam(':dni', $dni, PDO::PARAM_STR);
            $insertPasajero->bindParam(':nombre', $nombre, PDO::PARAM_STR);
            $insertPasajero->bindParam(':numero_plaza', $asiento, PDO::PARAM_INT);

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
        } catch (PDOException $e) {
            echo "Error: $e";
        }
    }
}
