<?php
namespace Src;

class Urgencia extends Medico{
    private int $unidad;

    public function __construct(int $codigo, string $nombre, int $edad, Turno $turno, int $unidad){
        parent::__construct($codigo, $nombre, $edad, $turno);
        $this->unidad=$unidad;
    }

    public function setUnidad(int $unidad):void{
        $this->unidad=$unidad;
    }

    public function getUnidad():int{
        return $this->unidad;
    }
}
?>