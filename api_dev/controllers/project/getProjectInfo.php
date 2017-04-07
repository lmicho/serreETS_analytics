<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


// include database and object files
include_once '../../config/database.php';
include_once '../../models/project.php';

//user id session
$userId = 1;

//project id
$projectId = 1;

// instantiate database and member object
$database = new Database();
$db = $database->getConnection();

// initialize object
$project = new Project($db);

// query project
$stmt = $project->getProjectInfo($projectId);
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
            "sensor_id" => $sensor_id,
            "sensor_name" => $sensor_name,
            "sensor_unit" => $sensor_unit,
            "sensor_description" => $sensor_description,
            "ID" => $ID,
            "name" => $name,
            "description" => $description
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