<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../estilos/estilo.css">
</head>
<body>
    <?php
        require_once "../vendor/autoload.php";
        use Src\funcionesBD;
    ?>

    <h1>Jugadores de la NBA</h1>
    <form action="" method="post">
        <label for="equipo">Equipo: </label>
        <select name="equipo" id="equipo">

                <?php
                $equipos=funcionesBD::getEquipos();

                if(count($equipos)>0){
                    foreach($equipos as $equipo){
                        // Dejo el equipo seleccionado
                        $selected = (isset($_POST['equipo']) && $_POST['equipo'] === $equipo) ? 'selected' : '';
                        echo "<option value='$equipo' $selected>$equipo</option>";
                    }
                }
                ?>

            </select>
            <br><br>
            <input type="submit" name="mostrar" id="mostrar" value="Mostrar">
        </form>

        <?php
            if (isset($_POST['mostrar'])) {
                $equipoSeleccionado = $_POST['equipo'];
                // $jugadores = funcionesBD::getJugadores($equipoSeleccionado);
                // $peso = funcionesBD::getPeso($equipoSeleccionado);
                
                // echo "<table border='1'>";
                // echo "<tr><th>Nombre</th><th>Peso</th></tr>";
                // for($i=0; $i<count($jugadores); $i++){
                //     echo "<tr><td>$jugadores[$i]</td>";
                //     echo "<td>$peso[$i]</td></tr>";
                // }
                // echo "</table>";

                $jugadores = funcionesBD::getJugadoresConPeso($equipoSeleccionado);
            
                if (count($jugadores) > 0) {
                    echo "<table border='1'>";
                    echo "<tr><th>Nombre</th><th>Peso</th></tr>";
                    foreach ($jugadores as $jugador) {
                        echo "<tr><td>{$jugador['nombre']}</td><td>{$jugador['peso']}</td></tr>";
                    }
                    echo "</table>";
                }
            }
        ?>

    </p>
</body>
</html>