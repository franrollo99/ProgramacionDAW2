<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="../style/estilo.css">
</head>
<body>

    <?php
    require_once dirname(__DIR__) . "/vendor/autoload.php";
    use Src\classes\funcionesBD;
    ?>

    <h1>Registro de usuarios</h1>
    <hr>
    <form method="post">
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" placeholder="Su nombre" required>
        <hr>
        <label for="contraseña">Contraseña: </label>
        <input type="password" name="contraseña" id="contraseña" placeholder="Su clave" required>
        <hr>
        <label for="repetirContraseña">Repetir Contraseña: </label>
        <input type="password" name="repetirContraseña" id="repetirContraseña" placeholder="Su clave" required>
        <hr>
        <input type="submit" name="registrar" value="Registrar">
    </form>
    <hr>
    <a href="index.html">Volver al menu principal</a>
    <br>

    <?php
    if(isset($_POST['registrar'])){
        $usuario=$_POST['nombre'];
        $contraseña=$_POST['contraseña'];
        $repetirContraseña=$_POST['repetirContraseña'];

        if($contraseña===$repetirContraseña){
            $contraseñaHash=password_hash($contraseña, PASSWORD_BCRYPT);
            $registro=funcionesBD::registro($usuario, $contraseñaHash);

            if($registro){
                echo "<p>El usuario se ha registrado correctamente</p>";
            }else{
                echo "<p>Ha habido un error en el registro del usuario</p>";
            }
        }else{
            echo "<p>Claves incorrectas</p>";
        }
    }
    ?>
</body>
</html>