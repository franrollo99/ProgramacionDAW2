<?php
namespace Src;

class Familia extends Medico{
    private int $numPacientes;

    public function __construct(int $codigo, string $nombre, int $edad, Turno $turno, int $numPacientes){
        parent::__construct($codigo, $nombre, $edad, $turno);
        $this->numPacientes=$numPacientes;
    }

    public function __toString():string{
        return parent::__toString() . ", Numero pacientes: $this->numPacientes";
    }

    public function setNumPacientes(int $numPacientes):void{
        $this->numPacientes=$numPacientes;
    }

    public function getNumPacientes():int{
        return $this->numPacientes;
    }
}
?>