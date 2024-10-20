<?php
    include_once 'mensaje.php';

    class Aeropuerto{
        use Mensaje;

        private $elementosVoladores=[];

        public function __construct(){
            $this->elementosVoladores=[];
        }
        
        public function insertar(ElementoVolador $elemento):void{
            $this->elementosVoladores[]=$elemento;
            $this->mostrarMensaje("El elemento volador " . $elemento->getNombre() . " ha sido añadido ");
        }

        public function buscar(string $nombre):void{
            foreach($this->elementosVoladores as $elemento){
                if($elemento->getNombre()==$nombre){
                    $this->mostrarMensaje("Elemento encontrado");
                    $elemento->mostrarInformacion();
                    return;
                }
            }
            $this->mostrarMensaje("Error: no se encontro ningun elemento volador con el nombre $nombre");
        }

        public function listarCompania(string $compania):void{
            $encontrado=false;
            foreach($this->elementosVoladores as $elemento) {
                if ($elemento instanceof Avion && $elemento->getCompaniaAerea() == $compania) {
                    echo "Avión encontrado en la compañía $compania<br>";
                    $elemento->mostrarInformacion();
                    $encontrado=true;
                }
            }
            if (!$encontrado) {
                echo "No se encontró ningún avión en la compañía $compania<br>";
            }
        }

        public function rotores(int $numRotores):void {
            $encontrado=false;
            foreach($this->elementosVoladores as $elemento) {
                if ($elemento instanceof Helicoptero && $elemento->getNRotor() == $numRotores) {
                    echo "Helicóptero con $numRotores rotores encontrado:<br>";
                    $elemento->mostrarInformacion();
                    $encontrado = true;
                }
            }
            if (!$encontrado) {
                echo "No se encontraron helicópteros con $numRotores rotores<br>";
            }
        }

        public function despegar(string $nombre, int $altitud, int $velocidad):ElementoVolador{
            foreach ($this->elementosVoladores as $elemento) {
                if($elemento->getNombre() == $nombre) {
                    $elemento->acelerar($velocidad);
                    $elemento->volar($altitud);
                    return $elemento;
                }
            }
            echo "Error: No se encontró ningún aparato con el nombre $nombre<br>";
            return null;
        }
    }
?>