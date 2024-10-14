<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post">
        <h1>Buscador de peliculas</h1>
        <hr>
        <p>Introduce el nombre de la pelicula en mayusculas</p>
        <label for="buscador">Buscador</label>
        <input type="text" name="buscador" id="buscador" required>
        <br><br>
        <input type="submit" name="buscar" value="Buscar">
        <hr>
    </form>

    <?php
        if(isset($_POST['buscar'])){
            $busqueda=$_POST['buscador'];
            $peliculas=["EL LOBO DE WALL STREET", "SUPERMAN", "BATMAN", "SPIDERMAN", "ORIGEN", "12 AÑOS DE ESCLAVITUD"];
            $resultados = [];

            foreach($peliculas as $pelicula){
                // strpos() devuelve la posición de la primera aparición, si no encuentra la cadena devuelve false
                if (strpos($pelicula, $busqueda) !== false) {
                    $resultados[] = $pelicula;
                }
            }

            if (count($resultados) > 0) {
                echo "<h2>Resultados de búsqueda:</h2><ul>";
                foreach ($resultados as $resultado) {
                    echo "<li>$resultado</li>";
                }
                echo "</ul>";
            } else {
                echo "<p>No se encontraron resultados para '$busqueda'.</p>";
            }
        }

    ?>
</body>
</html>