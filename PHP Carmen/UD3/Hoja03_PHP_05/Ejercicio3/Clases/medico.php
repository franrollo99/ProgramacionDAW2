<?php
    abstract class Medico{
        protected $nombre;
        protected $edad;
        protected $turno;

        public function __construct(string $nombre, int $edad, string $turno){
            $this->nombre=$nombre;
            $this->edad=$edad;
            $this->turno=$turno;
        }

        abstract public function mostrarDatos():void;
        
        //metodos GET de edad y turno para obtener el numero de medicos con mas de 60 años en turno de tarde
        public function getEdad():int{
            return $this->edad;
        }

        public function getTurno():string{
            return $this->turno;
        }

    }
?>