
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="public/scripts/functions.js" type="module" defer></script>
    <script src="public/scripts/add.js" type="module" defer></script>
    <title>Document</title>
</head>
<body>
    <div class="container">
        <a href="index.php?action=list-restaurants">See all available restaurants....</a>
        <form action="" method="POST">
            <input type="text" id="name" name="name" placeholder="Restaurant Name">
            <select name="cuisine" id="cuisine">
                <option value="" selected disabled>--Select a cuisine</option>
                <option value="korean">korean</option>
                <option value="japanese">japanese</option>
                <option value="american">american</option>
                <option value="chinese">chinese</option>
                <option value="mexican">mexican</option>
                <option value="spanish">spanish</option>
            </select>
            <input type="number" id="price" name="price" placeholder="Price">
            <input type="url" id="url" name="url" placeholder="URL">
            <button type="button" id="add-restaurant" name="add-restaurant">Add New Restaurant</button>
        </form>
        <div id="outcome"></div>  
    </div>
</body>
</html>

