<?php
namespace Src;

class Urgencia extends Medico{
    private string $unidad;

    public function __construct(int $codigo, string $nombre, int $edad, string $turno, string $unidad){
        parent::__construct($codigo, $nombre, $edad, $turno);
        $this->unidad=$unidad;
    }

    public function __toString():string{
        return parent::__toString() . ", Unidad: $this->unidad";
    }

    public function setUnidad(string $unidad):void{
        $this->unidad=$unidad;
    }

    public function getUnidad():string{
        return $this->unidad;
    }
}
?>