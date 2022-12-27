<?php

require 'models/restaurants.php';

$restaurants = new Restaurants();


$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
print_r($data);
$requestID = isset($data['request-id']) ? $data['request-id'] : 'NOT FOUND';
$requestData = isset($data['data']) ? $data['data'] : 'NO DATA';


if($requestID  === 'delete-restaurant') {
    print_r($requestData);
    $restaurants->deleteRestaurant($requestData);
}