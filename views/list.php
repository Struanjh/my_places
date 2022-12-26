<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Restaurants</title>
</head>
<body>
    <a href="index.php?action=add-restaurant">Back to add page</a>
    <h1>Here are all the aviailable restaurants: </h1>
    <?php
    for ($i=0; $i<count($listOfRestaurants); $i++) {
    ?>
        <div id="<?=$listOfRestaurants[$i]['id']?>">
            <h2>Restaurant <?php echo number_format($i) +1 ?></h2>
            <p>Name: <?=$listOfRestaurants[$i]['name']?></p>
            <p>Cuisine: <?=$listOfRestaurants[$i]['cuisine']?></p>
            <p>Price: <?=$listOfRestaurants[$i]['price']?></p>
            <p>Url: <?=$listOfRestaurants[$i]['url']?></p>
        </div>  
    <?php
    } 
    ?>
</body>
</html>