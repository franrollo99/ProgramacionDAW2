<?php
    trait InformacionLaboral {
        public $codigoEmpleado;
        public $salario;
    
        public function actualizarInformacionLaboral($codigoEmpleado, $salario) {
            $this->codigoEmpleado = $codigoEmpleado;
            $this->salario = $salario;
        }
    
        public function mostrarInformacionLaboral() {
            return "Código de Empleado: $this->codigoEmpleado, Salario: $this->salario";
        }
    }
?>