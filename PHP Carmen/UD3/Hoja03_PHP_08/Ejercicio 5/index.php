<?php
    if (isset($_POST['enviar'])) {
        $numero=$_POST['numero'];
        if($numero%2===0){
            echo "El numero $numero es par";
        }else{
            echo "El numero $numero es impar";
        }
    }else{
        echo $_SERVER['PHP_SELF'];
    }

    echo "<br><br><a href=index.html>Volver</a>";
?>