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

    <h1>Traspaso de jugadores</h1>
    <hr>
    <!-- En action pones la ubicacion del fichero -->
    <form action="" method="post">
        <label for="equipo">Equipo: </label>
        <select name="equipo" id="equipo">

            <?php
            $equipos=funcionesBD::getEquipos();

            if(count($equipos)>0){
                foreach($equipos as $equipo){
                    // Dejo el equipo seleccionado
                    $selected = (isset($_POST['equipo']) && $_POST['equipo'] === $equipo) ? 'selected' : '';
                    // Con la siguiente linea se bloquea la seleccion y fija la que has seleccionado
                    //  " . (isset($_REQUEST['mostrar']) ? 'disabled' : '') . "
                    echo "<option value='$equipo' $selected>$equipo</option>";
                }
            }
            ?>

        </select>
        <br><br>
        <input type="submit" name="mostrar" id="mostrar" value="Mostrar">
        <br><br>
    </form>

    <?php
            if (isset($_POST['mostrar']) || isset($_POST['traspaso'])) {
                $equipoSeleccionado = $_POST['equipo'];
                $jugadores = funcionesBD::getJugadores($equipoSeleccionado);
                
                echo "<table border='1'>";
                echo "<tr><th>Nombre</th></tr>";
                foreach ($jugadores as $jugador) {
                    echo "<tr><td>$jugador</td></tr>";
                }
                echo "</table>";

                if(isset($_POST['traspaso'])){
                    $equipoSeleccionado = $_POST['equipo'];
                    $jugadorBaja = $_POST['bajaJugador'];
                    $nombreNJ = $_POST['nombreNJ'];
                    $procedenciaNJ = $_POST['procedenciaNJ'];
                    $alturaNJ = $_POST['alturaNJ'];
                    $pesoNJ = $_POST['pesoNJ'];
                    $posicion = $_POST['posicionNJ'];

                    if(funcionesBD::deleteJugador($equipoSeleccionado, $jugadorBaja)){
                        echo "<p>El jugador $jugadorBaja ha sido eliminado del equipo $equipoSeleccionado correctamente</p>";
                    }else{
                        echo "<p>Error al eliminar el jugador $jugadorBaja</p>";
                    }

                    if(funcionesBD::addJugador($equipoSeleccionado, $nombreNJ, $procedenciaNJ, $alturaNJ, $pesoNJ, $posicion)){
                        echo "<p>El jugador $nombreNJ ha sido agregado al equipo $equipoSeleccionado correctamente</p>";
                    }else{
                        echo "<p>Error al agregar el jugador $nombreNJ</p>";
                    }

                }
        ?>

    <hr>
    <h3>Baja y alta de jugadores:</h3>
    <hr>
    <form action="" method="post">

        <!-- Creo un campo oculto para mantener el equipo seleccionado en el segundo formulario ya que cuando
          se envia el segundo formulario, el boton mostrar del primer formulario no esta seleccinoado -->
        <input type="hidden" name="equipo" value="<?php echo $equipoSeleccionado ?>">

        <label for="bajaJugador">Baja de jugador:</label>
        <select name="bajaJugador" id="bajaJugador">

            <?php
            $jugadores=funcionesBD::getJugadores($equipoSeleccionado);

            if(count($jugadores)>0){
                foreach($jugadores as $jugador){
                    // Dejo el jugador seleccionado seleccionado
                    $selected = (isset($_POST['bajaJugador']) && $_POST['bajaJugador'] === $jugador) ? 'selected' : '';
                    echo "<option value='$jugador' $selected>$jugador</option>";
                }
            }
            ?>

        </select>
        <br><br>
        <h3>Datos del nuevo jugador:</h3>
        <label for="nombreNJ">Nombre:</label>
        <input type="text" name="nombreNJ" id="nombreNJ" required>
        <br><br>
        <label for="procedenciaNJ">Procedencia:</label>
        <input type="text" name="procedenciaNJ" id="procedenciaNJ" required>
        <br><br>
        <label for="alturaNJ">Altura:</label>
        <input type="number" name="alturaNJ" id="alturaNJ" step="0.01" required>
        <br><br>
        <label for="pesoNJ">Peso:</label>
        <input type="number" name="pesoNJ" id="pesoNJ" step="0.01" required>
        <br><br>
        <label for="posicionNJ">Posicion:</label>
        <select name="posicionNJ" id="posicionNJ">
            <option value="C">C</option>
            <option value="C-F">C-F</option>
            <option value="F">F</option>
            <option value="F-C">F-C</option>
            <option value="F-G">F-G</option>
            <option value="G">G</option>
            <option value="G-F">G-F</option>
        </select>
        <br><br>
        <input type="submit" name="traspaso" id="traspaso" value="Realizar traspaso">
    </form>

    <?php
        }
    ?>
</body>
</html>