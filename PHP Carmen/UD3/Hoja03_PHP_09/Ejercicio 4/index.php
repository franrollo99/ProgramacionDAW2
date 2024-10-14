<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo web</title>
</head>
<body>
    <form method="post">
        <h1>Suma de cantidades</h1>
        <hr>

        <?php
            for($i=1; $i<=10; $i++){
                echo "<label for='c$i'>Cantidad $i:</label>";
                echo "<input type='number' name='numeros[]' id='c$i'>";
                echo "<br><br>";
            }
        ?>
        
        <hr>
        <input type="submit" name="sumar" value="Sumar">
    </form>

    <br>

    <?php
        if(isset($_POST['sumar'])){
            $numeros=$_POST['numeros'];

            $suma=array_sum($numeros);

            // $suma=0;
            // foreach($numeros as $numero){
            //     $suma+=$numero;
            // }

            echo "La suma de todos los numeros es $suma";
        }
    ?>
</body>
</html>