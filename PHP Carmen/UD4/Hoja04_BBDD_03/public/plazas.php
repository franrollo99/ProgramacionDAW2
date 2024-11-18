<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plazas</title>
</head>
<body>

    <?php
        require_once dirname(__DIR__) . "/vendor/autoload.php";
        use Src\funcionesBD;
    ?>

    <h1>Gestion de plazas</h1>
    <hr>

    <?php
        $asientos=funcionesBD::getAsientos();
        
        foreach($asientos as $asiento){
            echo "<label>Plaza {$asiento['numero']}: <input type='text' name='plaza{$asiento['numero']}' value='{$asiento['precio']}'> €</label><br><br>";
        }
    ?>
    
    <hr>
    <input type="submit" name="actualizar" value="Actualizar">
    <br><br>
    <a href="index.php">Pagina de inicio</a>
</body>
</html>