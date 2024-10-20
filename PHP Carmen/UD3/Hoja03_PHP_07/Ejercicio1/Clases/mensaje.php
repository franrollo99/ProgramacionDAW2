<?php
    trait Mensaje {
        // Método para mostrar el mensaje por pantalla
        public function mostrarMensaje($mensaje):void{
            echo $mensaje . "<br>";
        }
    }
?>