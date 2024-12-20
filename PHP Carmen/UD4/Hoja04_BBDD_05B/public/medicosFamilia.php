<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medicos familia</title>
    <link rel="stylesheet" href="../style/estilo.css">
</head>
<body>

    <?php
    require_once "../vendor/autoload.php";
    use Src\funcionesBD;
    ?>

    <form method="get">
        <label for="numPacientes">Introduce un numero de pacientes:</label>
        <input type="number" name="numPacientes" id="numPacientes">
        <br><br>
        <input type="submit" name="mostrar" value="Mostrar">
    </form>
    <p><a href="principal.php">Volver a la pagina principal</a></p>

    <?php
    if(isset($_GET['mostrar'])){
        $numPacientes=$_GET['numPacientes'];
        $medicosPorPacientes=funcionesBD::getMedicosPorPacientes($numPacientes);
        
        if(count($medicosPorPacientes)>0){
            echo "<table><tr><th>Medicos</th</tr>";

            foreach($medicosPorPacientes as $medico){
                echo "<tr><td>{$medico}</td></tr>";
            }
            echo "</table>";
        }else{
            echo "No hay ningun medico registrado con $numPacientes pacientes";
        }
    }
    ?>

</body>
</html>