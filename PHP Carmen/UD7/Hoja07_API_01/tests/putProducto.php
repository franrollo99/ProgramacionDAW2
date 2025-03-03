<?php
$url = "http://localhost:8000/api/productos/11";
$data = [
    "nombre" => "Producto Modificado",
    "descripcion" => "Nueva descripción",
    "precio" => 15.50
];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($curl);
curl_close($curl);

print_r(json_decode($response, true));
