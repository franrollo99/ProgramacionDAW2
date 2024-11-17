<?php
    namespace Src;

    use Src\conexionBD;
    use PDO;
    use PDOException;

    final class funcionesBD{

        static function getDatosLibros():array{

            $conexion = conexionBD::getConnection();

            $consulta = $conexion->query('SELECT numero_ejemplar, titulo, anyo_edicion, precio, fecha_adquisicion from libros');
            $resultado = [];

            while($registro = $consulta->fetch(PDO::FETCH_OBJ)){
                $resultado[] = ['numero_ejemplar' => $registro->numero_ejemplar, 'titulo' => $registro->titulo, 'anyo_edicion' => $registro->anyo_edicion,'precio' => $registro->precio,'fecha_adquisicion' => $registro->fecha_adquisicion];
            }

            return $resultado;
        }


        static function guardarDatos($titulo, $añoEdicion, $precio, $fechaAdquisicion):string{
            try{
                $conexion = conexionBD::getConnection();
                
                $consulta=$conexion->prepare('INSERT into libros (titulo, anyo_edicion, precio, fecha_adquisicion) values (:titulo, :anyoEdicion, :precio, :fechaAdquisicion)');
                $consulta->bindParam(':titulo', $titulo);
                $consulta->bindParam(':anyoEdicion', $añoEdicion);
                $consulta->bindParam(':precio', $precio);
                $consulta->bindParam(':fechaAdquisicion', $fechaAdquisicion);

                if($consulta->execute()){
                    return "Datos guardados correctamente";
                }else{
                    return "Error al guardar los datos";
                }
            }catch(PDOException $e){
                return "Excepcion: " . $e->getMessage();
            }
            
        }
    }
?>