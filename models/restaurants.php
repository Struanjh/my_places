<?php

require_once './models/db.php';

class Restaurants extends Db {

  public function getRestaurants () {
    $db = $this->connectDB();
    $restaurants = $db->query('SELECT * FROM restaurants');
    $restaurants = $restaurants->fetchAll();
    return $restaurants;
  }

  public function addRestaurant($data) {
    $db = $this->connectDB();
    $newRestaurant = $db->prepare('INSERT INTO restaurants (name, cuisine, price, url)
    VALUES (:name, :cuisine, :price, :url)');
    $newRestaurant->execute([
        'name' => $data['name'],
        'cuisine' => $data['cuisine'],
        'price' => $data['price'],
        'url' => $data['url']
    ]);
  }


  public function editRestaurant($data) {
    print_r($data);
    $db = $this->connectDB();
    $sql = "UPDATE restaurants SET name=:name, cuisine=:cuisine, price=:price, url=:url WHERE id=:id";
    $db->prepare($sql)->execute([
      'name' => $data['name'],
      'cuisine' => $data['cuisine'],
      'price' => $data['price'],
      'url' => $data['url'],
      'id' => $data['id']
    ]);
  }
}
