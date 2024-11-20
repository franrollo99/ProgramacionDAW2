<?php
    namespace Src;

    abstract class Producto{
        protected  int $codigo;
        protected  float $precio;
        protected  string $nombre;
        protected  Categoria $categoria;

        public function __construct(int $codigo, float $precio, string $nombre, Categoria $categoria){
            $this->codigo=$codigo;
            $this->precio=$precio;
            $this->nombre=$nombre;
            $this->categoria=$categoria;
        }

        public function __toString():string{
            return "Codigo: $this->codigo, Nombre: $this->nombre, Precio: $this->precio, Categoria: $this->categoria";
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