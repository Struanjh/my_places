

<?php

try {
    $action = isset($_GET['action']) ? $_GET['action'] : 'add-restaurant';
    
    switch($action) {
        case "list-restaurants":
            include 'controllers/list.php';
            break;
        case "add-restaurant":
            include 'controllers/add.php';
            break;
        case "edit-restaurant":
            include 'controllers/edit.php';
            break;
        default:
            echo 'Nope youve chosen an invalid route';
            break;
    }
} catch(Error $e) {
    echo $e;
}