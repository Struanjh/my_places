
<?php

require_once 'models/restaurants.php';

$restaurants = new Restaurants();

$listOfRestaurants = $restaurants->getRestaurants();

//Need to get a lisf of restaurants and store it in variable restaurant....

$submissionType = 'edit-form';
$btn = 'edit-restaurant';
$btnText = 'Edit Restaurant Details';

require 'views/list.php';