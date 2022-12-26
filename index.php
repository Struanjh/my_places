

<?php
//---------------ROUTER----------------//

//Scenarios: 
//1) Action not set - display list
//2) Action not found - display error
//3) 

try {
    $action = isset($_GET['action']) ? $_GET['action'] : 'add-restaurant';
    
    //VALID ACTIONS ['post', 'list']
    // Use scandir() to GET FILE NAMES DYNAMICALLY TO POPULATE ABOVE LIST......
    //IF URL ACTION ATTR NOT IN LIST, then wrong URL.....
    //IF URL ACTION NOT SET.... return home page?
    //include('./controller/' . $action . 'php')
    
    switch($action) {
        case "list":
            include 'controllers/list.php';
            break;
        case "add-restaurant":
            include 'controllers/add.php';
            break;
        default:
            echo 'Nope youve chosen an invalid route';
            break;
    }
} catch(Error $e) {
    echo $e;
}