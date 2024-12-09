<?php
namespace Src\Clases\producto;
use Src\Clases\producto\Familia;
use Src\Clases\producto\Imagen;


// Los nombres de las clases siempre en singular, en las BBDD van en plural
final class Producto{
    private int $id;
    private string $nombre;
    private string $descripcion;
    private float $precio;
    private Familia $familia;
    private int $imagenId;

    public function __construct(string $nombre, string $descripcion, float $precio, Familia $familia, Imagen $imagenId, int $id){
        $this->id=$id;
        $this->nombre=$nombre;
        $this->descripcion=$descripcion;
        $this->precio=$precio;
        $this->familia=$familia;
        $this->imagenId=$imagenId;
    }

    public function __toString(){
        return "Id: $this->id, Nombre: $this->nombre, Descripcion: $this->descripcion, Precio: $this->precio, Familia: " . $this->familia->getNombre().", Imagen id: $this->imagenId->imagenId";
    }

    public function getId():int{
        return $this->id;
    }

    public function getNombre():string{
        return $this->nombre;
    }

    public function getDescripcion():string{
        return $this->descripcion;
    }

    public function getPrecio():float{
        return $this->precio;
    }

    // public function getFamilia():Familia{
    //     return $this->precio;
    // }

    // public function getImagenId():Imagen{
    //     return $this->imagenId;
    // }
}
?>