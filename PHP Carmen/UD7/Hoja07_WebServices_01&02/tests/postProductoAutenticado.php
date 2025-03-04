<?php
$url = "http://localhost:8000/api/productos";
$data = json_encode([
    "nombre" => "Nuevo Producto",
    "descripcion" => "Descripción del producto",
    "precio" => 19.99,
    "stock" => 50,
    "categoria_id" => 1
]);

$token = "1|78c2DCQK2FCpBj0MFZ3qXCWsliJCkMhxQLzHzcjQad3d352f"; // CÁMBIALO por el token que obtuviste al hacer login

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

$response = curl_exec($curl);
curl_close($curl);

print_r(json_decode($response, true));
