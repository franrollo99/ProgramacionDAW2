<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
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
    
</body>
</html>