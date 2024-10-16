<?php
    interface InterfazProveedorCorreo{
        public function enviarCorreo(String $paraQuien, String $asunto, String $cuerpoMensaje): boolval;
    }
?>