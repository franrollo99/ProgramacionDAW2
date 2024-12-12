<?php

function flash(string $clave, string $mensaje=null):?string{
    
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }

    // Si existe la clave nos quedamos con su valor el cual devolvemos y eliminamos la clave
    if(isset($_SESSION['flash'][$clave])){
        $valor = $_SESSION['flash'][$clave];
        unset($_SESSION['flash'][$clave]);
        return $valor;
    }else{
        // Si no asignamos el valor del mensaje a la clave y retornamos el mensaje
        $_SESSION['flash'][$clave] = $mensaje;
        return $mensaje;
    }

    return null;
}

function iniciar_sesion():bool{
    // Si hay una sesion activa devuelve true, si no false
    return session_status() !== PHP_SESSION_NONE;
}

function estaLogueado():bool{
    // Comprueba si hay una sesion con una variable usuario definida
    return isset($_SESSION['usuario']);
}

function redireccionar(string $url):void{
    header("Location: $url");
    exit();
}

function esPost():bool{
    // Comprueba si el metodo de solicitud del servidor es POST
    return $_SERVER['REQUEST_METHOD'] == 'POST';
}

?>