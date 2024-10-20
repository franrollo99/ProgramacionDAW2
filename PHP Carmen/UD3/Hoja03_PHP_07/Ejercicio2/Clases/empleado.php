<?php
    include_once 'informacionLaboral.php';
    include_once 'informacionPersonal.php';
    include_once 'mensaje.php';

    class Empleado {
        use InformacionPersonal, InformacionLaboral;
    
        public function mostrarInformacionCompleta() {
            return $this->mostrarInformacionPersonal() . ", " . $this->mostrarInformacionLaboral();
        }
    }
?>