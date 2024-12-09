<?php
    namespace Src\Clases;

    use Src\Clases\producto\Familia;
    use Src\Clases\producto\Imagen;
    use Src\Clases\producto\Producto;
    use Src\Clases\ConexionBD;
    use PDO;
    use PDOException;

    final class FuncionesBD{

        static function crear(Producto $producto):bool{
            $conexion=ConexionBD::getConexion();
            $consulta=$conexion->prepare("INSERT into productos(nombre, descripcion, precio, familia, imagenId) values()");
            $consulta->bindParam(...);
            return $consulta->execute();
        }

        static function listarFamilias():array{
            $conexion=ConexionBD::getConexion();
            $consulta=$conexion->query("SELECT codigo, nombre from familias");
            $resultados=[];

            while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
                $resultado[]=new Familia($registro->codigo, $registro->nombre);
            }
            return $resultados;
        }

        static function listarImagenes():array{
            $conexion=ConexionBD::getConexion();
            $consulta=$conexion->query("SELECT id, nombre, url from imagenes");
            $resultados=[];

            while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
                $resultado[]=new Imagen($registro->id, $registro->nombre, $registro->url);
            }
            return $resultados;
        }

        static function listar():array{
            $conexion=ConexionBD::getConexion();
            $consulta=$conexion->query("SELECT p.id, p.nombre, p.descripcion, p.precio, f.nombre, i.nombre from productos p join familias f on f.codigo=p.id left join imagenes i on p.imagenId=i.id");
            $resultados=[];
            $familias=self::listarFamilias();
            $imagenes=self::listarImagenes();

            while($registro=$consulta->fetch(PDO::FETCH_OBJ)){
                $familiaEncontrada=null;
                $imagenEncontrada=null;

                foreach($familias as $familia){
                    if($familia->getCodigo()==$registro->familia){
                        $familiaEncontrada=$familia;
                    }
                }


                foreach($imagenes as $imagen){
                    if($imagen->getId()==$registro->imagenId){
                        $imagenEncontrada=$imagen;
                    }
                }

                $resultados[]=new Producto($registro->id, $registro->nombre, $registro->descripcion, $registro->precio, $familiaEncontrada, $imagenEncontrada);
            }
            return $resultados;
        }

        static function listarPorId(int $id):Producto{
            $productos=self::listar();

            foreach($productos as $producto){
                if($producto['id']==$id){
                    return $producto;
                }
            }

        }

        static function borrar(int $id):bool{
            $conexion=ConexionBD::getConexion();
            $consulta=$conexion->prepare("DELETE from productos where id=:id");
            $consulta->bindParam(':id', $id);
            return $consulta->execute();
        }
    }
?>