<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turnos medicos</title>
    <link rel="stylesheet" href="../style/estilo.css">
</head>
<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\funcionesBD;
    ?>

    <form method="get">
        <label for="turno">Turno: </label>
        <select name="turno" id="turno">
            <?php
            $turnos=funcionesBD::getTurnos();
            foreach($turnos as $turno){
                $selected=(isset($_GET['turno']) && $_GET['turno']===$turno->getTipo())? 'selected' : '';
                echo "<option value='{$turno->getTipo()}' $selected>{$turno->getTipo()}</option>"; //Mejor esta opcion
                // echo '<option value="'.$turno->getTipo().'" '.$selected.'>'.$turno->getTipo().'</option>';
            }
            ?>
        </select>
        <input type="submit" name="mostrar" value="Mostrar">
    </form>
    <p><a href="principal.php">Volver a la pagina principal</a></p>

    <?php
    if(isset($_GET['mostrar'])){
        $turnoSeleccionado=$_GET['turno'];
        $medicosPorTurno=funcionesBD::getMedicosPorTurno($turnoSeleccionado);

        if(count($medicosPorTurno)>0){
            echo "<table><tr><th>Medicos</th></tr>";

            foreach($medicosPorTurno as $medico){
                echo "<tr><td>{$medico}</td></tr>";
            }
            echo "</table>";
        }else{
            echo "No hay ningun medico registrado en el turno de $turnoSeleccionado";
        }
    }
    ?>
</body>
</html>