<?php
$token = "1|78c2DCQK2FCpBj0MFZ3qXCWsliJCkMhxQLzHzcjQad3d352f"; // CÁMBIALO por el token que obtuviste al hacer login

$url = "http://localhost:8000/api/logout";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer $token"
]);

$response = curl_exec($curl);
$http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
curl_close($curl);

echo "Código HTTP: $http_code\n";
echo "Respuesta: ";
print_r(json_decode($response, true));
