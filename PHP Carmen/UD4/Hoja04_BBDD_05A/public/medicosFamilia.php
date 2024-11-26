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
        echo "<table><tr><th>Nombre</th><th>Edad</th></tr>";

        foreach($medicosPorPacientes as $medico){
            echo "<tr><td>{$medico['nombre']}</td><td>{$medico['edad']}</td></tr>";
        }
        echo "</table>";
    }
    ?>

</body>
</html>