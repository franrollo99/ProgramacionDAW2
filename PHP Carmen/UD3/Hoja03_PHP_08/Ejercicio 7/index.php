<?php
    if (isset($_POST['enviar'])) {
        $numero1=$_POST['numero1'];
        $numero2=$_POST['numero2'];
        $diferencia=$numero2-$numero1;
        
        echo "LISTA DE PARES DE NUMEROS DE $numero1 Y $numero2: <br>";

        for($i=0; $i<=$diferencia; $i++){
            echo "($numero1,$numero2)";
            $numero1++;
            $numero2--;
        }
    }else{
        echo $_SERVER['PHP_SELF'];
    }

    echo "<br><br><a href=index.html>Volver</a>";
?>