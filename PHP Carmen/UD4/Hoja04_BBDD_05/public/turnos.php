<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Turnos medicos</title>
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
    </form>
</body>
</html>