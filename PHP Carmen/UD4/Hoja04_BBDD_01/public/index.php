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
    <form action="" method="POST">
        <label for="equipo">Equipo: </label>
        <select name="equipo" id="equipo">

                <?php
                $equipos=funcionesBD::getEquipos();

                foreach($equipos as $equipo){
                    echo '<option>' . $equipo . '</option>';
                }
                ?>

            </select>
            <br><br>
            <input type="submit" name="mostrar" id="mostrar" value="Mostrar">
        </form>
        <hr>

        <?php
            if (isset($_POST['mostrar'])) {
                $equipoSeleccionado = $_POST['equipo'];
                $jugadores = funcionesBD::getJugadores($equipoSeleccionado);
                
                if ($jugadores) {
                    echo "<h2>Jugadores del equipo: $equipoSeleccionado</h2>";
                    echo "<table border='1'>";
                    echo "<tr><th>Nombre</th></tr>";
                    foreach ($jugadores as $jugador) {
                        echo "<tr><td>" . htmlspecialchars($jugador) . "</td></tr>";
                    }
                    echo "</table>";
                } else {
                    echo "<p>No se encontraron jugadores para el equipo seleccionado.</p>";
                }
            }
        ?>

    </p>
</body>
</html>