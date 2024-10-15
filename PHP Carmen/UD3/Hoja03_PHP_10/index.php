<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <?php
        $marcas=array(
            "Peugeot"=>[407, 3008, 508],
            "Toyota"=>["C-HR", "Rav4", "Corolla Hatchback"],
            "Lamborghini"=>["Huracan", "Urus", "Aventador"]
        );
    ?>
    <form method=post>
        <h1>Busca tu coche</h1>
        <label for="marcas">Marca:*</label>
        <select name="marcaSeleccionada" id="marcas">
            <?php
                foreach($marcas as $marca=>$modelos){
                    echo "<option value='$marca'>$marca</option>";
                }
            ?>
        </select>
        <br><br>
        <input type="submit" name="mostrar" value="Mostrar">
        <hr>
        <?php
            if(isset($_POST['mostrar'])){
                $marcaSeleccionada=$_POST['marcaSeleccionada'];

                echo "<form method='post'>";
                    echo "<h3>Coche</h3>";
                    foreach($marcas as $marca=>$modelos){
                        if($marca===$marcaSeleccionada){
                            foreach($modelos as $modelo){
                                echo "<input type='text' value='$modelo'><br><br>";
                            }
                        }
                    }
                    
                    echo "<input type='submit' name='actualizar' value='Actualizar'>";
                echo "</form>";
            }

            if(isset($_POST['actualizar'])){
                
            }
        ?>
    </form>
</body>
</html>