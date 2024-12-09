<?php
namespace Src\Clases\producto;

class Imagen{
    private int $id;
    private string $nombre;
    private string $url;

    // El valor que es nulo va al final del constructor
    public function __construct(string $nombre, string $url, int $id=0){
        $this->id=$id;
        $this->nombre=$nombre;
        $this->url=$url;
    }

    public function __toString(){
        return "Id: $this->id, Nombre: $this->nombre, Url: $this->url";
    }

    public function getId():int{
        return $this->id;
    }

    public function getNombre():string{
        return $this->nombre;
    }

    public function getUrl():string{
        return $this->url;
    }
}
?>