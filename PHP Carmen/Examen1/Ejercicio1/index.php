<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <?php
        include_once 'validaciones.php';
    ?>
    <form action="" method="POST">
        <h1>Gestion de Contactos</h1>
        <label for="nombre">Nombre: </label>
        <input type="text" name="nombre" id="nombre" required>
        <br><br>
        <label for="correo">Correo Electronico: </label>
        <input type="text" name="correo" id="correo" required>
        <br><br>
        <label for="telefono">Telefono: </label>
        <input type="text" name="telefono" id="telefono">
        <br><br>
        <input type="button" name="agregarContacto" value="Agregar Contacto" required>
    </form>
    
    <br>
    
    <?php
        include_once 'validaciones.php';

        $contactos = [
            ["nombre"=>"Juan Perez", "email"=>"juan.perez@gmail.com", "telefono"=>652678987],
            ["nombre"=>"Maria Lopez", "email"=>"maria.lopez@gmail.com", "telefono"=>656714560],
        ];

    ?>

    <table>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
        </tr>

        <?php
            foreach($contactos as $valor){
                echo "<tr>";
                echo "<td>$valor[nombre]</td>";
                echo "<td>$valor[email]</td>";
                echo "<td>$valor[telefono]</td>";
                echo "</tr>";
            }
        ?>
        
    </table>
</body>
</html>