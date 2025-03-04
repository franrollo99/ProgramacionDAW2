<?php
$url = "http://localhost:8000/api/login";
$data = json_encode([
    "email" => "test@example.com",
    "password" => "password"
]);

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

// Captura de errores
$response = curl_exec($curl);
$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
$curl_error = curl_error($curl);

curl_close($curl);

print_r(json_decode($response, true));
