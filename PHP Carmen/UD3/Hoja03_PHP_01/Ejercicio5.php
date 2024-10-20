<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
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

</body>
</html>