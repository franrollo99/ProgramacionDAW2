<?php
    function fechaEsp(){
        setlocale(LC_TIME, 'es');
        $fecha=strftime("%A, %e de %B de %Y");
        return ucfirst($fecha);
    }
?>