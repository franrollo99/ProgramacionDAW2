<?php
    if (isset($_POST['enviar'])) {
        $numero1=$_POST['numero1'];
        $numero2=$_POST['numero2'];
        $operacion=$_POST['operacion'];

        switch($operacion){
            case "suma":
                echo "El resultado de realizar la suma de los numeros $numero1 y $numero2 es " . ($numero1+$numero2);
                break;
            case "resta":
                echo "El resultado de realizar la resta de los numeros $numero1 y $numero2 es " . ($numero1-$numero2);
                break;
            case "producto":
                echo "El resultado de realizar el producto de los numeros $numero1 y $numero2 es " . ($numero1*$numero2);
                break;
            case "cociente":
                echo "El resultado de realizar el cociente de los numeros $numero1 y $numero2 es " . ($numero1/$numero2);
                break;
        }
    }else{
        echo $_SERVER['PHP_SELF'];
    }

    echo "<br><br><a href=index.html>Volver</a>";
?>