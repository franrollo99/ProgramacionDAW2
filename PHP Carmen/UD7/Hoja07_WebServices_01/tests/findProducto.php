<?php
$id = 4; // Cambia el ID según el producto que quieras consultar
$url = "http://localhost:8000/api/productos/$id";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

print_r(json_decode($response, true));
