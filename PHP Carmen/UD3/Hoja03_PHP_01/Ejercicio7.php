<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>
<body>
    
<?php
    for($n1=1; $n1<=10; $n1++){
        $n2=pow(2, $n1);
            echo "$n1/$n2, ";
    }
?>

<br>

<?php
    $n2=2;

    for($n1=1; $n1<=10; $n1++){
        echo "$n1/$n2, ";

        $n2*=2;
    }
?>

</body>
</html>