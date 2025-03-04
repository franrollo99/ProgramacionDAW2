<?php
$id = 1;
$url = "http://localhost:8000/api/productos/$id";

$data = [
    'nombre' => 'Producto Modificado',
    'descripcion' => 'Descripción modificada',
    'precio' => 99.99,
    'stock' => 10,
    'categoria_id' => 1
];

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json'
]);

$response = curl_exec($curl);
curl_close($curl);

print_r(json_decode($response, true));
