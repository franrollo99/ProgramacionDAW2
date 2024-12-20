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
    require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
    use Fran\Src\clases\FuncionesBD;
    ?>

    <h1>Formulario de registro</h1>
    <form method="post">
        <label for="usuario">Usuario</label>
        <input type="text" name="usuario" id="usuario" required>
        <label for="contraseña">Contraseña</label>
        <input type="password" name="contraseña" id="contraseña" required>
        <label for="confirmarContraseña">Confirmar contraseña</label>
        <input type="password" name="confirmarContraseña" id="confirmarContraseña" required>
        <input type="submit" value="Registrarte" name="registro">
    </form>

    <a href="index.html">Pagina de inicio</a>

    <?php
    if(isset($_POST['registro'])){
        $usuario = $_POST['usuario'] ?? null;
        $contraseña = $_POST['contraseña'] ?? null;
        $confirmarContraseña = $_POST['confirmarContraseña'] ?? null;

        if($contraseña === $confirmarContraseña){
            $hashContraseña = password_hash($contraseña, PASSWORD_BCRYPT);

            if(FuncionesBD::registrarUsuario($usuario, $hashContraseña)){
                echo "El usuario ha sido registrado correctamente";
            }
        }else{
            echo "La contraseña no coincide";
        }
}
    ?>

</body>
</html>