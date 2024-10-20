<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    $n=8;
    $esPrimo=true;

    for($i=2; $i<=sqrt($n); $i++){
        if($n%$i==0){
            $esPrimo=false;
            break;
        }
    }

    if($n<=2){
        $esPrimo=false;
    }

    if($esPrimo){
        echo "El numero $n es primo";
    }else{
        echo "El numero $n no es primo";
    }
?>

</body>
</html>