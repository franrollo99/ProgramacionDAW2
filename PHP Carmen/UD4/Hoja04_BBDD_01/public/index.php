<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Jugadores de la NBA</h1>
    <p>Equipo: 
        <select>
            <?php
            // require_once dirname(__DIR__) . "/vendor/autoload.php";
            // use Src\clases\funcionesBD;

            // $equipos=funcionesBD::getEquipos();

            // foreach($equipos as $equipo){
            //     echo "<option>" . $equipo . "</option>";
            // }
            ?>
        <select>
    </p>


    
    <?php
            require_once dirname(__DIR__) . "/vendor/autoload.php";
            use Src\funcionesBD;

            $equipos=funcionesBD::getEquipos();

            foreach($equipos as $equipo){
                echo "<p>" . $equipo . "</p>";
            }
            ?>
    
</body>
</html>