<?php
$url = "http://localhost:8000/api/productos";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

// var_dump(json_decode($response, true));
print_r(json_decode($response, true));


// Para ejecutarlo -> php .\tests\getProductos.php
// Se puede ver el estado de la conexion con -> curl http://localhost:8000/api/productos