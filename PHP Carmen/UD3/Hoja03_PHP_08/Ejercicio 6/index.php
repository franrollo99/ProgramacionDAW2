<?php
    if (isset($_POST['enviar'])) {
        $numero=$_POST['numero'];
        echo "TABLA DE MULTIPLICAR DEL $numero:";
        for($i=1; $i<=10; $i++){
            echo "<br>$i x $numero = " . ($i*$numero);
        }
    }else{
        echo $_SERVER['PHP_SELF'];
    }

    echo "<br><br><a href=index.html>Volver</a>";
?>