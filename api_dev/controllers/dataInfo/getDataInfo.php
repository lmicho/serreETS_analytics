<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


// include database and object files
include_once '../../config/database.php';
include_once '../../models/dataInfo.php';

// instantiate database and member object
$database = new Database();
$db = $database->getConnection();

// initialize object
$dataInfo = new DataInfo($db);

// member id
$sensorName = "PH01";

// query dataInfo
$stmt = $dataInfo->getDataInfoBySensorName($sensorName);
$num = $stmt->rowCount();

// check if more than 0 record found
if($num>0){

    // dataInfo array
    $dataInfo_arr=array();
    $dataInfo_arr["records"]=array();

    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);

        $dataInfo_item=array(
            "ID" => $id,
            "data_entry" => $data_entry,
            "input_date" => $input_date
        );

        array_push($dataInfo_arr["records"], $dataInfo_item);
    }



    echo json_encode($dataInfo_arr);
}

else{
    echo json_encode(
        array("message" => "No data found.")
    );
}


?>