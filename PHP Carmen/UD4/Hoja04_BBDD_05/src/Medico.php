<?php
namespace Src;

abstract class Medico{
    private int $codigo;
    private string $nombre;
    private int $edad;
    private string $turno;

    public function __construct(int $codigo, string $nombre, int $edad, string $turno){
        $this->codigo=$codigo;
        $this->nombre=$nombre;
        $this->edad=$edad;
        $this->turno=$turno;
    }

    public function __toString(){
        return "Codigo: $this->codigo, Nombre: $this->nombre, Edad: $this->edad, Turno: $this->turno";
    }

    public function setCodigo(int $codigo):void{
        $this->codigo=$codigo;
    }

    public function getCodigo():int{
        return $this->codigo;
    }

    public function setNombre(string $nombre):void{
        $this->nombre=$nombre;
    }

    public function getNombre():string{
        return $this->nombre;
    }

    public function setEdad(int $edad):void{
        $this->edad=$edad;
    }

    public function getEdad():int{
        return $this->edad;
    }

    public function setTurno(string $turno):void{
        $this->turno=$turno;
    }

    public function getTurno():string{
        return $this->turno;
    }
}
?>