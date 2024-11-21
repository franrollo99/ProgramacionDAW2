<?php
namespace Src;

class Turno{
    private string $tipo;

    public function __construct(string $tipo){
        $this->setTipo($tipo);
    }

    public function getTipo():string{
        return $this->tipo;
    }

    public function setTipo(string $tipo):void{
        $valoresPermitidos=['mañana', 'tarde', '24h'];
        if(!in_array($tipo, $valoresPermitidos)){
            echo "Turno invalido";
        }
        $this->tipo=$tipo;
    }

    public function __toString():string{
        return "Tipo: $this->tipo";
    }
}
?>