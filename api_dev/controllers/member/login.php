<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../../config/database.php';
include_once '../../models/member.php';

// instantiate database and member object
$database = new Database();
$db = $database->getConnection();

// initialize object
$member = new Member($db);

// query login member
$email = "laurianemichaud@hotmail.com";
$test = "test";
$password = hash('sha256', $test);


$stmt = $member->login($email, $password);
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){


    // member array
    $members_arr=array();
    $members_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $member_item=array(
            "id" => $id,
            "firstName" => $firstName,
            "lastName" => $lastName,
            "email" => $email,
            "password" => $password,
            "phone" => $phone,
            "description" => html_entity_decode($description),
            "firstVisitCheck" => $firstVisitCheck
        );

        array_push($members_arr["records"], $member_item);
    }


    if($members_arr["records"][0]["firstVisitCheck"]==1){
        echo "Veuillez changer votre mot de passe";
    }
    else{
        echo "Vous êtes connecté!";
    }

    echo json_encode($members_arr);



}

else{
    echo "L'adresse courriel et/ou le mot de passe utilisé sont invalides. Réessayer à nouveau ou contactez l'administrateur si le problème persiste.";
}


?>