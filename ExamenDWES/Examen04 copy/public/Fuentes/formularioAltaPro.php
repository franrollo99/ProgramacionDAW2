<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alta productos</title>
</head>
<body>
    <?php
    require_once (dirname(__DIR__,2))."/vendor/autoload.php";
    use Src\Clases\FuncionesBD;
    ?>

    <h1>Alta de productos</h1>
    <form method="post">
        <input type="text" name="nombre" placeholder="Nombre">
        <br><br>
        <textarea name="descripcion" placeholder="Descripcion"></textarea>
        <br><br>
        <input type="text" name="precio" placeholder="Precio">
        <br><br>
        <label for="familias">Selecciona una familia</label>
        <select name="familias" id="familias">
            
            <?php
            $familias=FuncionesBD::listarFamilias();
            foreach($familias as $familia){
                echo "<option value='".$familia->getCodigo()."'>".$familia->getNombre()."</option>";
            }
            ?>

        </select>
        <!-- <input type="hidden" name="familiaSeleccionada" value=""> -->
        <br><br>
        <input type="file" name="archivo">
        <br><br>
        <input type="submit" name="enviar" value="Enviar">
    </form>
    <br><br>
    <a href="../index.php">Volver listado</a>
    
    <?php
        if(isset($_POST['enviar'])){
            $nombre=$_POST['nombre'];
            $descripcion=$_POST['descripcion'];
            $precio=$_POST['precio'];
            $familia=$_POST['familiaSeleccionada'];
            $imagen=$_POST['archivo'];

            $ok=true;

            if(!validarRequerido($nombre) || !validarRequerido($descripcion) || !validarRequerido($precio)){
                echo "Por favor, rellena todos los datos";
                $ok=false;
            }else{
                if(!validarNumerico($precio)){
                echo "El archivo no tiene una extension valida";
                $ok=false;
                }
                if(!validarFormatoImagen($imagen)){
                    echo "No se puede procesar el archivo";
                    $ok=false;
                }else if(!validarSubidaFichero($imagen)){
                    echo "No se puede procesar el archivo";
                    $ok=false;
                }

                $nombreLimpio=limpiarTexto($nombre);
                $descripcionLimpia=limpiarTexto($descripcion);
                $precioLimpio=limpiarTexto($precio);
            }

            if($ok){
                if(crear()){
                    FuncionesBD::crear($nombreLimpio, $descripcionLimpia, $precioLimpio, $familia, $imagen);
                    echo "El producto se ha insertado correctamente";
                }else{
                    echo "No se ha podido insertar el producto";
                }
            }
        }
    ?>
    
</body>
</html>