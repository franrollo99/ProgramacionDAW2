<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <?php
        // Array asociativo de marcas y modelos
        $marcas = array(
            "Peugeot" => [407, 3008, 508],
            "Toyota" => ["C-HR", "Rav4", "Corolla Hatchback"],
            "Lamborghini" => ["Huracan", "Urus", "Aventador"]
        );

        $modificaciones = [];

        // Si se envió el formulario de actualización
        if (isset($_POST['actualizar'])) {
            $marcaSeleccionada = $_POST['marcaSeleccionada'];
            $nuevosModelos = $_POST['modelos']; // Recibimos los nuevos modelos enviados

            // Comparamos los modelos antiguos con los nuevos para detectar cambios
            foreach ($marcas[$marcaSeleccionada] as $indice => $modeloOriginal) {
                if ($modeloOriginal != $nuevosModelos[$indice]) {
                    // Guardamos los modelos modificados
                    $modificaciones[] = "Modelo cambiado: de '$modeloOriginal' a '{$nuevosModelos[$indice]}'";
                }
            }

            // Actualizamos los modelos en el array
            $marcas[$marcaSeleccionada] = $nuevosModelos;
        }
    ?>

    <form method="post">
        <h1>Busca tu coche</h1>
        <label for="marcas">Marca:*</label>
        <select name="marcaSeleccionada" id="marcas">
            <?php
                // Mostrar las marcas en el combobox
                foreach ($marcas as $marca => $modelos) {
                    // Mantener la marca seleccionada después de enviar el formulario
                    $selected = (isset($_POST['marcaSeleccionada']) && $_POST['marcaSeleccionada'] === $marca) ? 'selected' : '';
                    echo "<option value='$marca' $selected>$marca</option>";
                }
            ?>
        </select>
        <br><br>
        <input type="submit" name="mostrar" value="Mostrar">
        <hr>

        <?php
            // Si se seleccionó una marca y se pulsó "Mostrar" o "Actualizar"
            if (isset($_POST['mostrar']) || isset($_POST['actualizar'])) {
                $marcaSeleccionada = $_POST['marcaSeleccionada'];

                // Mostrar el formulario para actualizar los modelos
                echo "<form method='post'>";
                    echo "<h3>Modelos de $marcaSeleccionada</h3>";
                    echo "<table border='1'>";
                    echo "<tr><th>Modelo</th></tr>";

                    // Mostrar los modelos de la marca seleccionada en cajas de texto para editarlos
                    foreach ($marcas[$marcaSeleccionada] as $indice => $modelo) {
                        echo "<tr><td><input type='text' name='modelos[]' value='$modelo'></td></tr>";
                    }

                    echo "</table><br>";
                    // Campo oculto para volver a enviar la marca seleccionada
                    echo "<input type='hidden' name='marcaSeleccionada' value='$marcaSeleccionada'>";
                    echo "<input type='submit' name='actualizar' value='Actualizar'>";
                echo "</form>";
            }

            // Mostrar los cambios realizados si hay modificaciones
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
