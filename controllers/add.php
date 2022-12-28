<?php

require 'models/restaurants.php';

$restaurants = new Restaurants();


$content = trim(file_get_contents("php://input"));
$data = json_decode($content, true);
$requestIdentifier = isset($data['request-id']) ? $data['request-id'] : 'NOT FOUND';
$requestData = isset($data['data']) ? $data['data'] : 'NO DATA';

$submissionType = 'add-form';
$btn = 'add-restaurant';
$btnText = 'Add Restaurant';

if($requestIdentifier === 'add-restaurant') {
    $restaurants->addRestaurant($requestData);
    die(json_encode([
        'success' => true,
        'msg' => 'Restaurant Added Successfully!'
      ]));
}

require_once 'views/add.php';
