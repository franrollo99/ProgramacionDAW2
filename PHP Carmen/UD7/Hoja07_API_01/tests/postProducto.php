<?php
$url = "http://localhost:8000/api/productos";
$data = [
    "nombre" => "Producto Nuevo",
    "descripcion" => "Descripción del producto",
    "precio" => 9.99
];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($curl);
curl_close($curl);

print_r(json_decode($response, true));
