<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desarrollo Web</title>
    <link rel="stylesheet" href="estilos.css">
</head>
<body>
    <form method="post">
        <h1>Conversor de monedas</h1>
        <hr><br>
        <label for="cantidad">Cantidad:*</label>
        <input type="number" name="cantidad" id="cantidad" required>
        <br><br>
        <label for="origen">Origen:*</label>
        <select name="origen" id="origen">
            <option value="euros">Euros</option>
            <option value="dolares">Dolares</option>
            <option value="libras">Libras</option>
        </select>
        <br><br>
        <label for="destino">Destino:*</label>
        <select name="destino" id="destino">
            <option value="euros">Euros</option>
            <option value="dolares">Dolares</option>
            <option value="yuan">Yuan</option>
        </select>
        <br><br>
        <input type="submit" name="convertir" id="convertir" value="Convertir">
    </form>

    <br><br>


    <?php
        $cantidad=$_POST['cantidad'];
        $origen=$_POST['origen'];
        $destino=$_POST['destino'];
        $conversion=0;

        switch($origen){
            case "euros":
                if($destino==="dolares"){
                    $conversion=$cantidad*1.09;
                    echo "$cantidad euros son $conversion dolares";
                }elseif($destino==="yuan"){
                    $conversion=$cantidad*7.72;
                    echo "$cantidad euros son $conversion yuanes";
                }else{
                    echo "Has escogido la misma moneda de cambio";
                }
                break;
            case "dolares":
                if($destino==="euros"){
                    $conversion=$cantidad*0.92;
                    echo "$cantidad dolares son $conversion euros";
                }elseif($destino==="yuan"){
                    $conversion=$cantidad*7.07;
                    echo "$cantidad dolares son $conversion yuanes";
                }else{
                    echo "Has escogido la misma moneda de cambio";
                }
                break;
            case "yuan":
                if($destino==="euros"){
                    $conversion=$cantidad*0.13;
                    echo "$cantidad yuanes son $conversion euros";
                }elseif($destino==="dolares"){
                    $conversion=$cantidad*0.14;
                    echo "$cantidad yuanes son $conversion dolares";
                }else{
                    echo "Has escogido la misma moneda de cambio";
                }
                break;
        }
    ?>
</body>
</html>