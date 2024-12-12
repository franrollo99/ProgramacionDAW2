<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../estilo/estilo.css">
</head>
<body>
    <?php
    require_once dirname(__DIR__, 1) . "/vendor/autoload.php";
    use Fran\App\clases\Autenticarse;

    iniciar_sesion();

    if (estaLogueado()) {
        redireccionar("index.php?action=paginaConectado");
    }

    $error = flash("error");
    $correo = flash("correo");
    ?>

    <div class="login-container">
        <h1>Iniciar Sesión</h1>

        <?php if ($error): ?>
            <p class="error"><?= htmlspecialchars($error) ?></p>
        <?php endif; ?>

        <form action="index.php?action=autenticar" method="POST">
            <label for="correo">Correo Electrónico:</label>
            <input type="email" name="correo" id="correo" value="<?= htmlspecialchars($correo ?? '') ?>" required>

            <label for="contraseña">Contraseña:</label>
            <input type="password" name="contraseña" id="contraseña" required>

            <input type="submit" value="Iniciar Sesión">
        </form>
    </div>
</body>
</html>
