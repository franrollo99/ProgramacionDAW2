<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <?php
        $marcas = array(
            "Peugeot" => [407, 3008, 508],
            "Toyota" => ["C-HR", "Rav4", "Corolla Hatchback"],
            "Lamborghini" => ["Huracan", "Urus", "Aventador"]
        );

        $modificaciones = [];

        if (isset($_POST['actualizar'])) {
            $marcaSeleccionada = $_POST['marcaSeleccionada'];
            $nuevosModelos = $_POST['modelos'];

            foreach ($marcas[$marcaSeleccionada] as $indice => $modeloOriginal) {
                if ($modeloOriginal != $nuevosModelos[$indice]) {
                    $modificaciones[] = "Modelo cambiado: de '$modeloOriginal' a '{$nuevosModelos[$indice]}'";
                }
            }

            $marcas[$marcaSeleccionada] = $nuevosModelos;
        }
    ?>

    <form method="post">
        <h1>Busca tu coche</h1>
        <label for="marcas">Marca:*</label>
        <select name="marcaSeleccionada" id="marcas">
            <?php
                foreach ($marcas as $marca => $modelos) {
                    $selected = (isset($_POST['marcaSeleccionada']) && $_POST['marcaSeleccionada'] === $marca) ? 'selected' : '';
                    echo "<option value='$marca' $selected>$marca</option>";
                }
            ?>
        </select>
        <br><br>
        <input type="submit" name="mostrar" value="Mostrar">
        <hr>

        <?php
            if (isset($_POST['mostrar']) || isset($_POST['actualizar'])) {
                $marcaSeleccionada = $_POST['marcaSeleccionada'];

                echo "<form method='post'>";
                    echo "<h3>Modelos de $marcaSeleccionada</h3>";
                    echo "<table border='1'>";
                    echo "<tr><th>Modelo</th></tr>";

                    foreach ($marcas[$marcaSeleccionada] as $indice => $modelo) {
                        echo "<tr><td><input type='text' name='modelos[]' value='$modelo'></td></tr>";
                    }

                    echo "</table><br>";
                    echo "<input type='hidden' name='marcaSeleccionada' value='$marcaSeleccionada'>";
                    echo "<input type='submit' name='actualizar' value='Actualizar'>";
                echo "</form>";
            }

            if (!empty($modificaciones)) {
                echo "<h3>Modelos modificados:</h3>";
                echo "<ul>";
                foreach ($modificaciones as $modificacion) {
                    echo "<li>$modificacion</li>";
                }
                echo "</ul>";
            }
        ?>
    </form>
</body>
</html>
