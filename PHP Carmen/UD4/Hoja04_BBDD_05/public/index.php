<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Medicos</title>
</head>
<body>
    <?php
    require_once "../vendor/autoload.php";
    use Src\funcionesBD;
    ?>
    <form method="get">
        <p>Pulsa el boton para mostrar todos los medicos</p>
        <input type="submit" name="mostrar" value="Mostrar">
    </form>
    <p><a href="turnos.php">Ver medicos por turnos</a></p>
    <p><a href="medicosFamilia.php">Ver medicos de familia</a></p>

    <?php
    
    ?>
</body>
</html>