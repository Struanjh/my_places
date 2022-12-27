<?php

require 'models/restaurants.php';

$restaurants = new Restaurants();


$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
print_r($data);
$requestID = isset($data['request-id']) ? $data['request-id'] : 'NOT FOUND';
$requestData = isset($data['data']) ? $data['data'] : 'NO DATA';


if($requestID  === 'edit-restaurant') {
    print_r($requestData);
    $restaurants->editRestaurant($requestData);
    // $restaurants->editRestaurant($requestData[0]);
    // return json_encode([
    //     'success' => true,
    //     'message' => 'Restaurant Added Successfully!'
    // ]);
}
