<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    $km=900;
    if($km<=800){
        $total=$km*2*2.5;
    }else{
        $total=($km*2*2.5)*0.7;
    }
    echo "El precio total es de $total";
?>

</body>
</html>