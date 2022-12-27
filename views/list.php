<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/styles/index.css">
    <script src="public/scripts/functions.js" type="module" defer></script>
    <script src="public/scripts/list.js" type="module" defer></script>
    <title>List Restaurants</title>
</head>
<body>
    <div id="results-container">
        <a href="index.php?action=add-restaurant">Back to add page</a>
        <h1>Here are all the aviailable restaurants: </h1>
        <?php
        for ($i=0; $i<count($listOfRestaurants); $i++) {
        ?>
            <div class="restaurant-container card" data-restaurant-id="<?=$listOfRestaurants[$i]['id']?>">
                <div class="rest-data-container">
                    <h2>Restaurant <?php echo number_format($i) +1 ?></h2>
                    <p class="rest-attribute name"><?=$listOfRestaurants[$i]['name']?></p>
                    <p class="rest-attribute cuisine"><?=$listOfRestaurants[$i]['cuisine']?></p>
                    <p class="rest-attribute price"><?=$listOfRestaurants[$i]['price']?></p>
                    <p class="rest-attribute url"><?=$listOfRestaurants[$i]['url']?></p>
                </div>
                <div class="controls">
                    <button type="button" name="edit" class="edit">Edit</button>
                    <button type="button" name="delete" class="delete">Delete</button>
                </div>
            </div>  
        <?php
        } 
        ?>
    </div>
    <div id="edit-form-container">
    <?= require_once './views/components/edit-modal.php' ?>
    </div>
</body>
</html>