<?php


$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "serreets_bd";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

//load xml
$xml = simplexml_load_file('sensors.xml');

//size of xml array
$size = sizeOf($xml->capteur);
//$size = 1;

// object array
$arduinoArray = array();
$locationArray = array();
$locationArrayTrash = array();
$statusArray = array();
$sensorsArray = array();

// get values
for($i = 0; $i<$size; $i++){
    $id = $i+1;
    $arduino = trim($xml->capteur[$i]->arduino);
    $name = trim($xml->capteur[$i]->nom);
    $unit = trim($xml->capteur[$i]->unite);
    $description = trim($xml->capteur[$i]->description);
    $location = trim($xml->capteur[$i]->location);
    $location_description = trim($xml->capteur[$i]->emplacement);
    $status = trim($xml->capteur[$i]->statut);
    if ($xml->capteur[$i]->valmax==''){
        $maxVal = "";
    } else {
        $maxVal = trim($xml->capteur[$i]->valmax);
    }
    if ($xml->capteur[$i]->valmin=='') {
        $minVal = "";
    } else {
        $minVal = trim($xml->capteur[$i]->valmin);
    }

    if (in_array($arduino, $arduinoArray)) {
        //do nothing
    } else {
        array_push($arduinoArray, $arduino);
    }

    if (in_array($location, $locationArrayTrash)) {
        //do nothing
    } else {
        array_push($locationArrayTrash, $location);
        array_push($locationArray, $location . "," . $location_description);
    }

    if (in_array($status, $statusArray)) {
        //do nothing
    } else {
        array_push($statusArray, $status);
    }


    $sensorsArray[] = array(
        'id' => $id,
        'name' => $name,
        'unit' => $unit,
        'description' => $description,
        'arduino' => $arduino,
        'location' => $location,
        'status' => $status
    );

/*
    echo $id . "<br>";
    echo $arduino . "<br>";
    echo $name . "<br>";
    echo $unit . "<br>";
    echo $description . "<br>";
    echo $location . "<br>";
    echo $location_description . "<br>";
    echo $status . "<br>";
    echo $maxVal . "<br>";
    echo $minVal . "<br>";
    echo "-----<br>";
*/
}

//insert arduino
/*
 for($iArduino=0; $iArduino<count($arduinoArray); $iArduino++){

    $sql = "INSERT INTO arduino (name) VALUES ('" . $arduinoArray[$iArduino] . "')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

//insert location
/*for($iLocation=0; $iLocation<count($locationArray); $iLocation++){
    $arr = explode(",", $locationArray[$iLocation], 2);
    $locationId = $arr[0];
    $location_desc = $arr[1];

    $sql = "INSERT INTO location (name, description) VALUES ('" . $locationId . "', '" . $location_desc . "')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

//insert status
for($iStatus=0; $iStatus<count($statusArray); $iStatus++){

    $sql = "INSERT INTO status (name) VALUES ('" . $statusArray[$iStatus] . "')";
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
*/

//insert sensor



$sql = "SELECT * FROM Arduino";
$result = $conn->query($sql);

$arduinoTable = array();

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        array_push($arduinoTable, $row);
        //echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 results";
}

for($iSensorTable=0; $iSensorTable<count($sensorsArray); $iSensorTable++){

    for($iArduinoTable=0; $iArduinoTable<count($arduinoTable); $iArduinoTable++){

        if(trim($arduinoTable[$iArduinoTable]["name"])==trim($sensorsArray[$iSensorTable]["arduino"])){
            echo 'oui<br>';
            echo trim($arduinoTable[$iArduinoTable]["name"]). '<br>';
            echo trim($sensorsArray[$iSensorTable]["arduino"]). '<br>';
            echo '----- <br>';


            $sql1 = "INSERT INTO Sensor_Arduino (ID_Sensor, ID_Arduino) VALUES (" . trim($sensorsArray[$iSensorTable]["id"]). ", " . trim($arduinoTable[$iArduinoTable]["ID"]) . ")";
            if ($conn->query($sql1) === TRUE) {
                echo "New record created successfully";
            } else {
                echo "Error: " . $sql1 . "<br>" . $conn->error;
            }

        }else{
            echo 'non<br>';
            echo trim($arduinoTable[$iArduinoTable]["name"]). '<br>';
            echo trim($sensorsArray[$iSensorTable]["arduino"]). '<br>';
            echo '----- <br>';
        }
    }

}





var_dump($sensorsArray);




?>