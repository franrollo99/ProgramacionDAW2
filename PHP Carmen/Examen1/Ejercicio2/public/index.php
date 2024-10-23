<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
    <?php 
        require_once __DIR__ . '/../vendor/autoload.php';

        use Ejercicio2\interfaces\Encendible;
        use Ejercicio2\clases\Bombilla;
        use Ejercicio2\clases\Coche;

        function enciende_algo(Encendible $encendible){
            $encendible->encender();
        }
        
        function apaga_algo(Encendible $encendible){
            $encendible->apagar();
        }

        $bombilla1=new Bombilla(1);
        $bombilla2=new Bombilla(10);
        $coche= new Coche();

        enciende_algo($bombilla1);
        enciende_algo($bombilla2);
        apaga_algo($bombilla2);

        enciende_algo($coche);
        $coche->repostar(20);
        enciende_algo($coche);
        apaga_algo($coche);
        apaga_algo($coche);
    ?>
</body>
</html>