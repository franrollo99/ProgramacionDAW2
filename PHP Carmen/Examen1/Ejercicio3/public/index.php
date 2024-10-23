<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
    <form action="" method="POST">
        <h1>Generar Datos Falsos con Faker</h1>
        <label>Numero de Nombres: <input type="number" name="nombres" value=0></label>
        <br><br>
        <label>Numero de Emails: <input type="number" name="emails" value=0></label>
        <br><br>
        <label>Numero de Telefonos Moviles: <input type="number" name="telefonos" value=0></label>
        <br><br>
        <input type="submit" value="Generar" name="generar">
    </form>

    <?php
        require_once 'vendor/autoload.php';

        if(isset($_POST['generar'])){
            $nNombres=$_POST['nombres'];
            $nEmails=$_POST['emails'];
            $nTelefonos=$_POST['telefonos'];

            $faker=Faker\Factory::create();

            if($nNombres>0 || $nEmails>0 || $nTelefonos>0){
                echo "<h2>Resultados</h2>";

                if($nNombres>0){
                    echo "<h3>Nombres</h3>";

                    for($i=0; $i<$nNombres; $i++){
                        echo $faker->name();
                    }
                }

                if($nEmails>0){
                    echo "<h3>Emails</h3>";

                    for($i=0; $i<$nEmails; $i++){
                        echo $faker->email();
                    }
                }

                if($nTelefonos>0){
                    echo "<h3>Telefonos</h3>";

                    for($i=0; $i<$nTelefonos; $i++){
                        echo $faker->mobileNumber();
                    }
                }
            }
        }
    ?>
</body>
</html>