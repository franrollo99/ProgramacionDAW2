<?php
namespace Src;

use Src\ConexionBD;
use PDO;
use PDOException;

class FuncionesBD{
    public static function obtenerProductos(): array{
        $conexion=ConexionBD::getConnection();
        $consulta=$conexion->query("SELECT p.codigo, p.nombre, p.precio, p.categoria, a.mesCaducidad, a.anyoCaducidad, e.plazoGarantia  from producto p join categoria c on c.id=p.categoria left join alimentacion a on a.codigo=p.codigo left join electronica e on e.codigo=p.codigo");
        $resultados=[];
        $categorias=self::obtenerCategorias();

        while($registro = $consulta->fetch(PDO::FETCH_OBJ)){
            $categoriaProducto=null;

            foreach($categorias as $categoria){
                if($categoria->getId()===$registro->categoria){
                    $categoriaProducto=$categoria;
                }
            }

            if($registro->plazoGarantia==null){
                $resultados[]=new Alimentacion($registro->codigo, $registro->nombre, $registro->precio, $registro->mesCaducidad, $registro->anyoCaducidad, $categoriaProducto);
            }else{
                $resultados[]=new Electronica($registro->codigo, $registro->nombre, $registro->precio, $registro->plazoGarantia, $categoriaProducto);
            }
        }
        return $resultados;
    }

    public static function obtenerCategorias():array{
        $conexion=ConexionBD::getConnection();
        $consulta=$conexion->query("SELECT id, nombre from categoria");
        $resultados=[];

        while($registro = $consulta->fetch(PDO::FETCH_OBJ)){
            $resultados[]=new Categoria($registro->id, $registro->nombre);
        }

        return $resultados;
    }

    public static function obtenerProductosCategorias(int $turno):array{
        $productos=self::obtenerProductos();
        $resultados=[];

        foreach($productos as $producto){
            if($producto->getCategoria()->getId()==$turno){
                $resultados[]=$producto;
            }
        }
        return $resultados;
    }
}

?>