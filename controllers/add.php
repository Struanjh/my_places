<?php

require 'models/restaurants.php';

$restaurants = new Restaurants();


$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
$requestIdentifier = isset($data[0]) ? array_key_first($data[0]) : 'NOT FOUND';
$requestData = isset($data[1]) ?array_slice($data, 1) : 'NO DATA';

print_r($requestIdentifier);

if($requestIdentifier === 'add-restaurant') {
    print_r($requestData);
    $restaurants->addRestaurant($requestData[0]);
}

require_once 'views/add.php';