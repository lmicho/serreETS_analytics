<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// include database and object files
include_once '../../config/database.php';
include_once '../../models/member.php';

// instantiate database and member object
$database = new Database();
$db = $database->getConnection();

// member info
$userId = 2;
$password = "bou";

// initialize object
$member = new Member($db);

// update the password
if($member->updatePassword($userId, $password)){
    echo '{';
    echo '"message": "Password was updated."';
    echo '}';
}

// if unable to update the product, tell the user
else{
    echo '{';
    echo '"message": "Unable to update password."';
    echo '}';
}


?>