<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
</head>
<body>
    <?php
        $marcas=array("Peugeot"=>[407, 307], "Toyota"=>["CHR", 444], "Lamborgini"=>["huracan", "aorus"]);
    ?>
    <form method=post>
        <h1>Busca tu coche</h1>
        <label for="marca">Marca:*</label>
        <select name="marca" id="marca">
            <?php
                foreach($marcas as $marca=>$modelo){
                    echo "<option value='marcas[]'>$marca</option>";
                }
            ?>
        </select>
        <br><br>
        <input type="submit" name="mostrar" value="Mostrar">
        <hr>
        <?php
            if(isset($_POST['mostrar'])){
                echo "<h3>Coche</h3>";
                
            }
        ?>
    </form>
</body>
</html>