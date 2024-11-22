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
                $selected=(isset($_GET['turno']) && $_GET['turno']===$turno)? 'selected' : '';
                echo "<option value='$turno' $selected>$turno</option>";
            }
            ?>
        </select>
        <input type="submit" name="mostrar" value="Mostrar">
    </form>
    <p><a href="principal.php">Volver a la pagina principal</a></p>

    <?php
    if(isset($_GET['mostrar'])){
        $medicosPorTurno=funcionesBD::getMedicosPorTurno($turno);
        echo "<table><tr><th>Nombre</th><th>Edad</th></tr>";

        foreach($medicosPorTurno as $medico){
            echo "<tr><td>{$medico['nombre']}</td><td>{$medico['edad']}</td></tr>";
        }
        echo "</table>";
    }
    ?>
</body>
</html>