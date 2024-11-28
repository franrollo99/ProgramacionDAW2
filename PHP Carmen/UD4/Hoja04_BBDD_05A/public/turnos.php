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

    <form method="post">
        <label for="turno">Turno: </label>
        <select name="turno" id="turno">
            <?php
            $turnos=funcionesBD::getTurnos();
            foreach($turnos as $turno){
                $selected=(isset($_POST['turno']) && $_POST['turno']==$turno->getId())? 'selected' : '';
                echo "<option value='".$turno->getId()."' $selected>".$turno->getTipo()."</option>";
            }
            ?>
        </select>
        <input type="submit" name="mostrar" value="Mostrar">
    </form>
    <p><a href="principal.php">Volver a la pagina principal</a></p>

    <?php
    if(isset($_POST['mostrar'])){
        $turnoSeleccionado=$_POST['turno'];
        $medicosPorTurno=funcionesBD::getMedicosPorTurno($turnoSeleccionado);

        if($medicosPorTurno){
            echo "<table><tr><th>Medicos</th></tr>";

            foreach($medicosPorTurno as $medico){
                echo "<tr><td>$medico</td></tr>";
            }
            echo "</table>";
        }else{
            echo "<p>No hay ningun medico en este turno</p>";
        }
        
    }
    ?>
</body>
</html>