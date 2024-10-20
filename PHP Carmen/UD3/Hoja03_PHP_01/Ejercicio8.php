<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    $factorial=7;
    $total=1;

    echo "El factorial de $factorial es:";

    for($n=1; $n<=$factorial; $n++){
        $total=$total*$n;
        
        if($n!=$factorial){
            echo " $n x";
        }else{
            echo "$n = $total";
        }
    }
    
?>

</body>
</html>