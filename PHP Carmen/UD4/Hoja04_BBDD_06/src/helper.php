<!-- sin namespace, se carga como si fuera un fichero -->

<?php

//Si existe un valor devuelve true
function validarRequerido(string $param):bool{
    return !empty($param);
}

//Si el valor es numerico devuelve true
function validarNumerico(string $param):bool{
    return is_numeric($param);
}

// Primero se verifica si el indice ['tmp_name'] existe, luego se verifica si se ha subido el archivo
//['tmp_name'] contiene informacion sobre los archivos que han sido subidos a traves de un formulario
function validarUpload(array $fichero):bool{
    return isset($fichero['tmp_name']) && is_uploaded_file($fichero['tmp_name']);
}

//Guarda la extension en una variable y comprueba si aparece en el array
function validarFormatoImagen(string $imagen):bool{
    $extension=strtolower(pathinfo($imagen, PATHINFO_EXTENSION));
    return in_array($extension, ['jpeg', 'jpg', 'png']);
}

//Guarda las etiquetas permitidas en una variable
//Quita las etiquetas del html enviado
function limpiarTexto(string $texto):string{
    $etiquetasPermitidas= '<a><strong><em><h1><h2><h3><h4><h5><h6><ul><ol><li><blockquote><br><div>
    <span><table><thead><tbody><tr><th><td>';

    return strip_tags($texto, $etiquetasPermitidas);
}

function limpiarEntrada(){

    return;
}


// $files("campo name de la imgagen") da  informacion del archivo subido
function redireccionar(string $path):bool{
    $url="http://" . $path;
    return file_get_contents($url);
}

?>