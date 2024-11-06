<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        require_once "../vendor/autoload.php";
        use Src\funcionesBD;
    ?>

    <h1>Jugadores de la NBA</h1>
    <p>Equipo: 
        <select>
            <?php
            $equipos=funcionesBD::getEquipos();

            foreach($equipos as $equipo){
                echo '<option>' . $equipo . '</option>';
            }
            ?>
        </select>
        <br><br>
        <input type="submit" name="mostrar" id="mostrar" value="Mostrar">
        <hr>
        <?php
            $jugadores=funcionesBD::getJugadores();
            foreach($jugadores as $jugador){
                echo '<p>' . $jugador . '</p>';
            }
        ?>
    </p>
</body>
</html>