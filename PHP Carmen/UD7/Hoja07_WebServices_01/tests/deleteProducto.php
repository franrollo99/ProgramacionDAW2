<?php
$id = 4; // Cambia el ID del producto a eliminar
$url = "http://localhost:8000/api/productos/$id";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "DELETE");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);
curl_close($curl);

print_r(json_decode($response, true));
