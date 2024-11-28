<?php
    namespace Src;

    class Categoria{
        private int $id;
        private string $nombre;

        public function __construct(int $id, string $nombre){
            $this->id=$id;
            $this->nombre=$nombre;
        }

        public function __toString(){
            return "Id: $this->id, Nombre: $this->nombre";
        }

        public function getId():int{
            return $this->id;
        }

        public function getnombre():string{
            return $this->nombre;
        }
    }
?>