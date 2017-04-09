<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');


// include database and object files
include_once '../../config/database.php';
include_once '../../models/sensor.php';

//sensor id
$sensorId = isset($_GET['id']) ? $_GET['id'] : die();

// instantiate database and member object
$database = new Database();
$db = $database->getConnection();

// initialize object
$project = new Sensor($db);

// query project
$stmt = $project->getSensorInfo($sensorId);

$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // project array
    $project_info_arr=array();
    $project_info_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $project_info_item=array(
            "ID" => $ID,
            "name" => $name,
            "description" => $description,
            "unit" => $unit,
            "max_val" => $max_val,
            "min_val" => $min_val,
            "arduino" => $arduino,
            "location" => $location,
            "location_description" => $location_description,
            "status" => $status
        );

        array_push($project_info_arr["records"], $project_info_item);
    }

    echo json_encode($project_info_arr);
}

else{
    echo json_encode(
        array("message" => "No project found.")
    );
}


?>