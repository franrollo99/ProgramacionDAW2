<?php
namespace Src;

use Exception;

class Turno{
    private string $tipo;

    public function __construct(string $tipo){
        $this->setTipo($tipo);
    }

    public function __toString():string{
        return "Tipo: $this->tipo";
    }

    public function getTipo():string{
        return $this->tipo;
    }

    public function setTipo(string $tipo):void{
        $valoresPermitidos=['mañana', 'tarde', '24h'];
        if(!in_array($tipo, $valoresPermitidos)){
            throw new Exception("Turno invalido");
        }
        $this->tipo=$tipo;
    }
}
?>