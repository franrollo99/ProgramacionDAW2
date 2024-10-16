<?php
include_once 'interfazProveedorCorreo.php';

    class ServicioCorreo{
        private readonly InterfazProveedorCorreo $proveedorCorreo;

        public function __construct(InterfazProveedorCorreo $proveedorCorreo){
            $this->proveedorCorreo=$proveedorCorreo;
        }

        public function enviarCorreo(){
            
        }
    }
?>