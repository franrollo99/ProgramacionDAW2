<!-- https://fakerphp.org/ -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
    <form action="#" method="POST">
        <h1>Generar Datos Falsos con Faker</h1>
        <label for="nombres">Numero de Nombres: </label>
        <input type="number" name="nombres" id="nombres" value=<?php echo isset($_POST['generar']) ? $_POST['nombres'] : 0 ?> min=0>
        <br><br>
        <label for="emails">Numero de Emails: </label>
        <input type="number" name="emails" id="emails" value=<?php echo isset($_POST['generar']) ? $_POST['emails'] : 0  ?> min=0>
        <br><br>
        <label for="telefonos">Numero de Telefonos Moviles: </label>
        <input type="number" name="telefonos" id="telefonos" value=<?php echo isset($_POST['generar']) ? $_POST['telefonos'] : 0  ?> min=0>
        <br><br>
        <input type="submit" value="Generar" name="generar">
    </form>

    <?php
        require_once __DIR__ . '/../vendor/autoload.php';

        if(isset($_POST['generar'])){
            $nNombres=$_POST['nombres'];
            $nEmails=$_POST['emails'];
            $nTelefonos=$_POST['telefonos'];
            
            $faker=Faker\Factory::create('es_ES');
            
            if($nNombres>0 || $nEmails>0 || $nTelefonos>0){
                echo "<h2>Resultados</h2>";

                if($nNombres>0){
                    echo "<h3>Nombres</h3><ul>";

                    for($i=0; $i<$nNombres; $i++){
                        echo "<li>" . $faker->name() . "</li>";
                    }
                    echo "</ul>";
                }

                if($nEmails>0){
                    echo "<h3>Emails</h3><ul>";

                    for($i=0; $i<$nEmails; $i++){
                        echo "<li>" . $faker->email() . "</li>";
                    }
                    echo "</ul>";
                }

                if($nTelefonos>0){
                    echo "<h3>Telefonos</h3><ul>";

                    for($i=0; $i<$nTelefonos; $i++){
                        echo "<li>" . $faker->mobileNumber() . "</li>";
                    }
                    echo "</ul>";
                }
            }
        }
    ?>
</body>
</html>