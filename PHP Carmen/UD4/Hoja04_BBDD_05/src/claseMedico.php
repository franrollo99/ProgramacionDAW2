<?php
use Usuario\Src\Turno;

abstract class Medico{
    private int $codigo;
    private string $nombre;
    private int $edad;
    private Turno $turno;

    public function __construct(int $codigo, string $nombre, int $edad, Turno $turno){
        $this->codigo=$codigo;
        $this->nombre=$nombre;
        $this->edad=$edad;
        $this->turno=$turno;
    }

    public function __toString(){
        return "Codigo: $this->codigo, ";
    }
}
?>