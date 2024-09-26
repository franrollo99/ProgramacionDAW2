<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Desarrollo web</title>
</head>
<body>
    <h1>Ejercicios hoja 01</h1>
    
    <h2>Ejercicio 1</h2>
    <?php
        $nombre="Fran";
        $ciudadNacimiento="Torrelavega";
        print "<b>Mi nombre es " . $nombre . " y naci en " . $ciudadNacimiento . "</b>";
    ?>
    
    <br><br>
    <h2>Ejercicio 2</h2>
    
    <?php
        $x=-1;
        $y=9;
        $suma=$x+$y;
        print "La suma de $x + $y = $suma";
    ?>

    <br><br>
    <h2>Ejercicio 3</h2>
    
    <?php
        $x = -1;
        $y = 9;
        $suma = $x + $y; //He añadido el simbolo $ a las variables x e y
        print ("El valor de x es <i>" . $x . "<i>");   //He tenido que poner ; al final de la linea, he añadido comillas que faltaban y puntos
        "<br/>"; //He metido entre comillas la etiqueta br
        print("El valor de y es <i>$y</i><br/>"); //He cerrado el parentesis
        print("La suma es <b><i>$suma</i></b><br/>");
       //He quitado el ; del final de php 
    ?> 
</body>
</html>