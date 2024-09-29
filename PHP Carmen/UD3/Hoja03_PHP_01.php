<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <h1>Ejercicios hoja 01</h1>
    
    <h2>Ejercicio 1</h2>
    <?php
        setlocale(LC_TIME, 'es');
        $fecha = strftime('%A, %e de %B de %Y');
        echo ucfirst($fecha);
    ?>
    
    <br><br>
    
    <h2>Ejercicio 2</h2>
    <?php
        $suma=0;

        //Bucle que aumenta en 2 mientras se cumple la condicion
        for($i=10; $i<=100; $i+=2){
            $suma=$suma+$i;
        }

        echo "El resultado final es $suma";
    ?>
    
    <br><br>
    
    <h2>Ejercicio 3</h2>
    <?php
        $numero=121;

        //Convertimos el numero en una cadena y la invertimos
        $numeroString=strval($numero);
        $numeroInvertido=strrev($numeroString);

        //Verificamos si el numero es igual al numero invertido
        if($numero==$numeroInvertido){
            echo "$numero es capicua";
        }else{
            echo "$numero no es capicua";
        }
    ?>
    
    <br><br>
    
    <h2>Ejercicio 4</h2>
    <?php
        //Bucle donde se incrementa cada en 1 la variable numero hasta que sea 999 y se comprueba si es capicua como el ejercicio anterior
        for($numero=100; $numero<=999; $numero++){
            $numeroString=strval($numero);
            $numeroInvertido=strrev($numeroString);
            if($numero==$numeroInvertido){
                echo "$numero ";
            }
        }
    ?>
    
    <br><br>
    
    <h2>Ejercicio 5</h2>
    <?php
        for($numero1=1; $numero1 <=9; $numero1++){
            for($numero2=1; $numero2 <=9; $numero2++){
                for($numero3=1; $numero3 <=9; $numero3++){
                    $suma=$numero1+$numero2+$numero3;
                    $producto=$numero1*$numero2*$numero3;

                    if($suma==$producto){
                        echo "La suma de los digitos de $numero1$numero2$numero3 es igual al producto de los mismos <br>";
                    }
                }
            }
        }
    ?>
    
    <br><br>
    
    <h2>Ejercicio 6</h2>
    <?php
        $n1=0;
        $n2=1;

        echo "Los numeros de Fibonacci son: $n1, $n2, ";
        while($n1<999 || $n2<999){
            $suma=$n1+$n2;
            echo "$suma, ";
            if($n1<$n2){
                $n1=$suma;
            }else{
                $n2=$suma;
            }
        }
        echo "etc.";
    ?>
    
    <br><br>
    
    <h2>Ejercicio 7</h2>
    <?php
        for($n1=1; $n1<=10; $n1++){
            $n2=pow(2, $n1);
                echo "$n1/$n2, ";
        }
    ?>
    
    <br><br>
    
    <h2>Ejercicio 8</h2>
    <?php
        $factorial=7;
        $total=1;

        for($n1=1; $n1<=$factorial; $n1++){
            $total=$total*$n1;
        }
        echo "El factorial de $factorial es $total";
    ?>
    
    <br><br>
    
    <h2>Ejercicio 9</h2>
    <?php
        $km=900;
        if($km<=800){
            $total=$km*2*2.5;
        }else{
            $total=($km*2*2.5)*0.7;
        }
        echo "El precio total es de $total";
    ?>
    
    <br><br>
    
    <h2>Ejercicio 10</h2>
    <?php
        $n1=10;
        $esPrimo=true;
        for($n2=2; $n2<=sqrt($n1); $n2++){
            $resto=$n1%$n2;
            if($resto==0){
                $esPrimo=false;
                break;
            }
        }
        if($esPrimo){
            echo "El numero $n1 es primo";
        }
        if(!$esPrimo){
            echo "El numero $n1 no es primo";
        }
    ?>
    
    <br><br>
    
    <h2>Ejercicio 11</h2>
    <?php
        for($l=10; $l>=1; $l--){
            for($n=$l; $n >=1; $n--){
                echo "$n ";
            }
        echo "<br>";
        }
    ?>
    
    <br><br>
    
    <h2>Ejercicio 12</h2>
    <?php
        echo "Son numeros primos: ";
        for($n1=3; $n1<=999; $n1++){
            $esPrimo=true;
            for($n2=2; $n2<=sqrt($n1); $n2++){
                $resto=$n1%$n2;
                if($resto==0){
                    $esPrimo=false;
                    break;
                }
            }
            if($esPrimo){
                echo "$n1 ";
            }
        }
    ?>
    
    <br><br>
    
</body>
</html>