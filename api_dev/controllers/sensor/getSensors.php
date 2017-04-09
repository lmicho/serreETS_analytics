<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


// include database and object files
include_once '../../config/database.php';
include_once '../../models/sensor.php';

// instantiate database and member object
$database = new Database();
$db = $database->getConnection();

//user id session
$userId = 1;

// initialize object
$sensor = new Sensor($db);

// query sensor
$stmt = $sensor->getSensors($userId);
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // sensor array
    $sensor_arr=array();
    $sensor_arr["records"]=array();

    //sql array
    //$sql_sensor_query = array();
    //$sql_query = "SELECT S.*, A.name AS arduino, L.name AS location, ST.name AS status, D.data_entry AS data, D.input_date AS date FROM Sensor S LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON SS.ID_Status = ST.ID LEFT JOIN Sensor_DataInfo SD ON SD.ID_Sensor = S.ID LEFT JOIN DataInfo D ON SD.ID_DataInfo = D.ID";

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $sensor_item=array(
            "ID" => $ID,
            "name" => $name,
            "unit" => $unit,
            "description" => $description,
            "arduino" => $arduino,
            "location" => $location,
            "location_description" => $location_description,
            "status" => $status
        );

        array_push($sensor_arr["records"], $sensor_item);
    }

    echo json_encode($sensor_arr);

    //echo "\r\n";
    //echo "\r\n";

    //$sql_sensor_query["sql"]=array();
    //array_push($sql_sensor_query["sql"], $sql_query);

    //echo json_encode($sql_sensor_query);
}

else{
    echo json_encode(
        array("message" => "No sensor found.")
    );
}

//$sql_query = "SELECT S.*, A.name AS arduino, L.name AS location, ST.name AS status, D.data_entry AS data, D.input_date AS date FROM Sensor S LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON SS.ID_Status = ST.ID LEFT JOIN Sensor_DataInfo SD ON SD.ID_Sensor = S.ID LEFT JOIN DataInfo D ON SD.ID_DataInfo = D.ID";
?>