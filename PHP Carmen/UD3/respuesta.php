<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    
    <?php 
        if (isset($_GET['enviar'])) { 
            $nombre = $_GET['nombre']; 
            $modulos = $_GET['modulos'];
            print "Nombre: ".$nombre."<br>"; 
            foreach ($modulos as $modulo){
                print "Modulo: ".$modulo."<br>";
            }
        }
    ?>
</body>
</html>