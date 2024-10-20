<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>

<?php
     $n1=13;
     $n2=30;

     function suma($n1, $n2){
         
         return $n1+$n2;
     }

     echo "La suma de $n1 + $n2 es: " . suma($n1, $n2);
?>

</body>
</html>