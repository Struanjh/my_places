
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="public/styles/index.css">
    <link rel="stylesheet" href="public/styles/add.css">
    <script src="public/scripts/functions.js" type="module" defer></script>
    <script src="public/scripts/add.js" type="module" defer></script>
    <title>Document</title>
</head>
<body>
    <div class="page-container">
        <h1 class="title">Welcome To My Restaurants Home Page</h1>
        <h3 class="title">Use this site to store information about your favourite restaurants</h3>
        <nav>
            <button id="show-modal">Add a new restaurant</button>
            <a id="view-list-page" href="index.php?action=list-restaurants">
                View existing restaurants
            </a>
        </nav>
    </div>
    <div id="add-form-container">
        <?= require_once './views/components/form-modal.php' ?>
    </div>
</body>
</html>

