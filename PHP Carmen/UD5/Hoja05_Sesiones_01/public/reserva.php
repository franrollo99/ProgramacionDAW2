<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reserva de plazas</title>
</head>

<body>

    <?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";

    use Src\funcionesBD;
    // FUNCION VALIDAR DNI
    //modulo 23
    // if(!validarDNI($dni)){
    //     $dniError="Error en el DNI. El formato debera ser 01234567A";
    // }

    ?>

    <h1>Reserva de asiento</h1>
    <hr>
    <form method="post">
        <label>Nombre: <input type="text" name="nombre" required></label>
        <hr>
        <label>DNI: <input type="text" name="dni" pattern="^[0-9]{8}[A-Z]{1}$" required></label>
        <hr>
        <label>Asiento:
            <select name="asiento">

                <?php
                $asientos = funcionesBD::getAsientos();

                foreach ($asientos as $asiento) {
                    echo "<option value='{$asiento['numero']}'>{$asiento['numero']} ({$asiento['precio']}€)</option>";
                }
                ?>
            </select>
        </label>
        <hr>
        <input type="submit" name="reservar" value="Reservar">
    </form>

    <?php
    if (isset($_POST['reservar'])) {
        $nombre = $_POST['nombre'];
        $dni = $_POST['dni'];
        $asiento = $_POST['asiento'];

        funcionesBD::reserva($nombre, $dni, $asiento);
    }
    ?>

    <br><br>
    <a href="index.html">Pagina de inicio</a>
</body>

</html>