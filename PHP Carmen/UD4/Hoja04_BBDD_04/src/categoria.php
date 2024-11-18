<?php
    namespace Src;

    class Categoria{
        private $id;
        private $nombre;

        public function __construct($id, $nombre){
            $this->id=$id;
            $this->nombre=$nombre;
        }

        public function setId($id):void{
            $this->id=$id;
        }

        public function getId():int{
            return $this->id;
        }

        public function setNombre($nombre):void{
            $this->nombre=$nombre;
        }

        public function getnombre():string{
            return $this->nombre;
        }
    }
?>