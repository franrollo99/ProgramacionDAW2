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
                $jugadores = funcionesBD::getJugadoresConPeso($equipoSeleccionado);
            
                if (count($jugadores) > 0) {
                    echo "<form action='' method='post'>"; // Iniciar el formulario para actualizar
                    echo "<table border='1'>";
                    echo "<tr><th>Nombre</th><th>Peso</th></tr>";
                    
                    foreach ($jugadores as $jugador) {
                        // Crear un campo de texto para modificar el peso de cada jugador
                        echo "<tr>
                                <td>{$jugador['nombre']}</td>
                                <td><input type='number' name='pesoModificar[{$jugador['id']}]' value='{$jugador['peso']}' step='0.01'></td>
                              </tr>";
                    }
                    echo "</table>";
    
                    echo "<br><input type='submit' name='actualizar' value='Actualizar'>";
                    echo "</form>";
                }

            }

            if (isset($_POST['actualizar'])) {
                // Obtener los pesos modificados
                if (isset($_POST['pesoModificar'])) {
                    foreach ($_POST['pesoModificar'] as $idJugador => $pesoNuevo) {
                        // Actualizar el peso del jugador en la base de datos
                        if (funcionesBD::actualizarPesoJugador($idJugador, $pesoNuevo)) {
                            echo "<p>El peso del jugador con ID $idJugador ha sido actualizado a $pesoNuevo Kg.</p>";
                        } else {
                            echo "<p>Error al actualizar el peso del jugador con ID $idJugador.</p>";
                        }
                    }
                }
            }
        ?>

    </p>
</body>
</html>