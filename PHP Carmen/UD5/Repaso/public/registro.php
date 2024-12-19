<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link rel="stylesheet" href="../estilo/estiloRegistro.css">
</head>
<body>

    <?php
    require_once 
    ?>

    <h1>Formulario de registro</h1>
    <form method="post">
        <label for="usuario">Usuario</label>
        <input type="text" name="usuario" id="usuario" required>
        <label for="contraseña">Contraseña</label>
        <input type="password" name="contraseña" id="contraseña" required>
        <label for="confirmarContraseña = $_POST['contraseña'];">Confirmar contraseña</label>
        <input type="password" name="confirmarContraseña" id="confirmarContraseña" required>
        <input type="submit" value="Registrarte" name="registro">
    </form>

    <?php
    $usuario = $_POST['usuario'] ?? null;
    $contraseña = $_POST['contraseña'] ?? null;
    $confirmarContraseña = $_POST['confirmarContraseña'] ?? null;
    $hashContraseña = password_hash($contraseña, PASSWORD_BCRYPT);

    if(isset($_POST['registro']) && $contraseña === $confirmarContraseña){
        echo "hola";
    }else{
        echo "La contraseña no coincide";
    }
    ?>

</body>
</html>