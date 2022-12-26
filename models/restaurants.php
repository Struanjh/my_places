<?php

require_once './models/db.php';

class Restaurants extends Db {

  // public function getRestaurants () {
  //   $db = $this->connectDB();
  //   $restaurants = $db->query('SELECT * FROM posts');
  //   $posts = $posts->fetchAll();
  //   return $posts;
  // }

  public function addRestaurant($data) {
    echo "MY DATA" . "<br>";
    print_r($data);
    echo gettype($data);
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
}
