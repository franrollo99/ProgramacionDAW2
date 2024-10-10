<!DOCTYPE html>
<html lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios de la hoja 02</h1>

    <h2>Ejercicio 1</h2>
    <?php
        include_once 'Hoja03_PHP_02Funciones.php';
        echo fechaEsp();
    ?>

    <br><br><br>

    <h2>Ejercicio 2</h2>
    <?php
        $n1=13;
        $n2=30;

        function suma($n1, $n2){
            
            return $n1+$n2;
        }

        echo "La suma de $n1 + $n2 es: " . suma($n1, $n2);
    ?>

    <br><br><br>

<h2>Ejercicio 3</h2>
<?php
    $mensaje="Este es el mensaje";

    function mensaje($mensaje){
        return $mensaje;
    }

    echo mensaje($mensaje);
?>

<br><br><br>

<h2>Ejercicio 4</h2>
<?php
    $capital=1000;
    $redito=0.05; //5%
    $tiempo=5; //Años

    function interesSimple($capital, $redito, $tiempo){
        return $capital*$redito*$tiempo;
    }

    function interesCompuesto($capital, $redito, $tiempo){
        return $capital*pow((1+$redito), $tiempo)-$capital;
    }

    $interesSimple = interesSimple($capital, $redito, $tiempo);
    $interesCompuesto = interesCompuesto($capital, $redito, $tiempo);

    echo "Interés Simple: " . number_format($interesSimple, 2) . "€<br>";
    echo "Interés Compuesto: " . number_format($interesCompuesto, 2) . "€<br>";

    if ($interesSimple > $interesCompuesto) {
        echo "El interés simple es más beneficioso.<br>";
    } else if ($interesCompuesto > $interesSimple) {
        echo "El interés compuesto es más beneficioso.<br>";
    } else {
        echo "Ambos intereses son iguales.<br>";
    }
?>

<br><br><br>

<h2>Ejercicio 5</h2>
<?php
    $numero=36.63;

    function capicua($numero){
        $numeroString=strval($numero);
        $numeroInvertido=strrev($numeroString);

        if($numeroString==$numeroInvertido){
            return "El numero $numero es capicua";
        }else{
            return "El numero $numero no es capicua";
        }

    }

    function redondeo($numero){
        return "El numero $numero redondeado es " . round($numero);
    }

    function digitos($numero){
        $digitosNum=strlen(strval($numero));
        //Comprobamos si es entero o no
        if(is_int($numero)){
            return "El numero $numero tiene " . $digitosNum . " digitos";
        }else{
            return "El numero $numero tiene " . $digitosNum-1 . " digitos";//Restamos 1 porque cuenta la coma de los decimales
        }
        
    }

    echo capicua($numero) . "<br>";
    echo redondeo($numero) . "<br>";
    echo digitos($numero);
?>

<br><br><br>

<h2>Ejercicio 6</h2>
<?php
    $dia=5;
    $mes=10;
    $año=1999;

    function comprobarFecha($dia, $mes, $año){
        if(checkdate($mes, $dia, $año)){
            return "La fecha $dia-$mes-$año es correcta";
        }else{
            return "La fecha $dia-$mes-$año no es correcta";
        }
    }

    echo comprobarFecha($dia, $mes, $año);
?>

<br><br><br>

<h2>Ejercicio 7</h2>
<?php
/* REVISAR
    function calcularDigitoControl(string $numero, string $pesos): int{
        $suma=0;
        //Calcular la suma de los numeros con sus pesos respectivos
        for($i=0; $i<count($numero); $i++){
            $pesos=str_replace(",", "", $pesos);
        }
    }*/
?>

<br><br><br>

<h2>Ejercicio 8</h2>
<?php
    $variable="Comer algas es realmente sano";

    $posicionAlgas=strpos($variable, "algas");
    echo "La palabra 'algas' esta en la posicion $posicionAlgas<br>";

    $reemplazoCadena=str_replace("realmente", "muy", $variable);
    echo "La cadena con el reemplazo es: $reemplazoCadena <br>";

    $comprobarAnacardo=strpos($variable, "anacardo");
    if($comprobarAnacardo !== false){
        echo "La palabra 'anacardo' esta en la cadena <br>";
    }else{
        echo "La palabra 'anacardo' no esta en la cadena <br>";
    }

    $cadenaInvertida=strrev($variable);
    echo $cadenaInvertida . "<br>";

    $vocalesE=substr_count($variable, "e");
    echo "El numero de vocales 'e' que hay en la cadena es: $vocalesE";
?>

<br><br><br>
</body>
</html>