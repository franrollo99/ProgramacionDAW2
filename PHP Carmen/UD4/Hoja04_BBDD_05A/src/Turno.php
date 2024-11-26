<?php
namespace Src;

use Exception;

class Turno{
    private int $id;
    private string $tipo;

    public function __construct(int $id, string $tipo){
        $this->id=$id;
        $this->setTipo($tipo);
    }

    public function __toString():string{
        return "Tipo: $this->tipo";
    }

    public function getId():int{
        return $this->id;
    }

    public function getTipo():string{
        return $this->tipo;
    }

    public function setTipo(string $tipo):void{
        // $valoresPermitidos=['mañana', 'tarde', '24h'];
        // if(!in_array($tipo, $valoresPermitidos)){
        //     throw new Exception("Turno invalido");
        // }
        $this->tipo=$tipo;
    }
}
?>