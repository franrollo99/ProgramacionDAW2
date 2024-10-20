<?php
    include_once 'Volador.php';

    abstract class ElementoVolador implements Volador{
        protected $nombre;
        protected $numAlas;
        protected $numMotores;
        protected $altitud;
        protected $velocidad;

        public function __construct(string $nombre, int $numAlas, int $numMotores){
            $this->nombre=$nombre;
            $this->numAlas=$numAlas;
            $this->numMotores=$numMotores;
            $this->altitud=0;
            $this->velocidad=0;
        }

        public function setNombre(string $nombre):void{
            $this->nombre=$nombre;
        }
        public function getNombre():string{
            return $this->nombre;
        }

        public function setNumAlas(int $numAlas):void{
            $this->numAlas=$numAlas;
        }
        public function getNumAlas():int{
            return $this->numAlas;
        }
        
        public function setNumMotores(int $numMotores):void{
            $this->numMotores=$numMotores;
        }
        public function getNumMotores():int{
            return $this->numMotores;
        }

        public function volando():bool{
            $volando=false;
            if($this->altitud>0){
                $volando=true;
            }

            return $volando;
        }

        public function acelerar($velocidad):void{
            $this->velocidad=$velocidad;
        }

        abstract function volar($altitud);

        abstract function mostrarInformacion();
    }
?>