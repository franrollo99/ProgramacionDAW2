<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    echo "Numeros capicua entre 100 y 999: ";

    for($n=100; $n<=999; $n++){
        
        $nString=strval($n);
        $nInvertido=strrev($nString);

        if($nString==$nInvertido){
            echo "$n ";
        }
    }
?>

</body>
</html>