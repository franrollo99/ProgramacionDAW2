<?php
namespace Src;

abstract class Producto{
    private  int $codigo;
    private  string $nombre;
    private  float $precio;
    private  Categoria $categoria;

    public function __construct(int $codigo, string $nombre, float $precio, Categoria $categoria){
        $this->codigo=$codigo;
        $this->nombre=$nombre;
        $this->precio=$precio;
        $this->categoria=$categoria;
    }

    public function __toString():string{
        return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: " . $this->categoria->getNombre();
    }

    public function setCodigo(int $codigo):void{
        $this->codigo=$codigo;
    }

    public function getCodigo():int{
        return $this->codigo;
    }

    public function setPrecio(float $precio):void{
        $this->precio=$precio;
    }

    public function getPrecio():float{
        return $this->precio;
    }

    public function setNombre(string $nombre):void{
        $this->nombre=$nombre;
    }

    public function geNombre():string{
        return $this->nombre;
    }

    public function setCategoria(int $categoria):void{
        $this->categoria=$categoria;
    }

    public function getCategoria():Categoria{
        return $this->categoria;
    }
}
?>