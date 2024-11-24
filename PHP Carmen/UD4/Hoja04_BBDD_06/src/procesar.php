<?php

use Src\conexionBD;
use Src\PDOCrearProducto;
use Src\CrearProducto;

require_once 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombreProducto = $_POST['nombreProducto'] ?? null;
    $imagen = $_FILES['imagenProducto'] ?? null;
    $precio = $_POST['precio'] ?? null;
    $descripcion = $_POST['descripcionProducto'] ?? null;

    $correcto = true;

    // Validaciones
    if (!validarRequerido($nombreProducto) || !validarRequerido($precio) || !validarRequerido($descripcion)) {
        echo "<p>Por favor, rellena todos los datos</p>";
        $correcto = false;
    }

    if (!validarNumerico($precio)) {
        echo "<p>Por favor, introduce un precio válido</p>";
        $correcto = false;
    }

    if (!validarUpload($imagen)) {
        echo "<p>No se puede procesar el archivo</p>";
        $correcto = false;
    }

    if (!validarFormatoImagen($imagen['name'])) {
        echo "<p>El archivo no tiene una extensión válida (jpeg, jpg, png)</p>";
        $correcto = false;
    }

    if ($correcto) {
        // Limpieza de datos
        $nombreProducto = limpiarEntrada($nombreProducto);
        $descripcion = limpiarEntrada($descripcion);

        // Manejo del archivo de imagen
        $directorio = '../productos/';
        $nombreUnico = uniqid() . '-' . basename($imagen['name']);
        $rutaArchivo = $directorio . $nombreUnico;

        if (!move_uploaded_file($imagen['tmp_name'], $rutaArchivo)) {
            echo "<p>Error al subir la imagen</p>";
        } else {
            try {
                // Conexión a la base de datos
                $conexion = conexionBD::getConexion();

                // Uso del repositorio y la clase CrearProducto
                $repositorio = new PDOCrearProducto($conexion);
                $crearProducto = new CrearProducto($repositorio);

                $producto = [
                    'nombre' => $nombreProducto,
                    'precio' => $precio,
                    'descripcion' => $descripcion,
                    'imagen' => $nombreUnico,
                ];

                if ($crearProducto->crear($producto)) {
                    echo "<p>El producto se ha subido a la base de datos correctamente</p>";
                } else {
                    echo "<p>Error al guardar el producto en la base de datos</p>";
                }
            } catch (Exception $e) {
                echo "<p>Error en la base de datos: " . $e->getMessage() . "</p>";
            }
        }
    }
}

?>
