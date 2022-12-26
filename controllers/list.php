
<?php

require_once 'models/restaurants.php';

$restaurants = new Restaurants();

$listOfRestaurants = $restaurants->getRestaurants();

//Need to get a lisf of restaurants and store it in variable restaurant....

 require 'views/list.php';