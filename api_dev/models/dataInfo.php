<?php
class DataInfo{

    // database connection and table name
    private $conn;

    // object properties
    public $id;
    public $data_entry;
    public $input_date;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read dataInfo
    function getDataInfoBySensorId($sensorId){

        // select all query
        $query = "SELECT D.ID, D.data_entry, D.input_date FROM DataInfo D LEFT JOIN Sensor_DataInfo SD ON SD.ID_DataInfo = D.ID LEFT JOIN Sensor S ON S.ID = SD.ID_Sensor WHERE S.ID ='" . $sensorId . "'";



        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;


        //SELECT S.*, A.name AS arduino, L.name AS location, ST.name AS status, D.data_entry AS data, D.input_date AS date FROM Sensor S LEFT JOIN Project_Sensor PS ON PS.ID_Sensor = S.ID LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON SS.ID_Status = ST.ID LEFT JOIN Sensor_DataInfo SD ON SD.ID_Sensor = S.ID LEFT JOIN DataInfo D ON SD.ID_DataInfo = D.ID WHERE PS.ID_Project IN (SELECT DISTINCT P.ID FROM Project P LEFT JOIN Member_Project MP ON MP.ID_Project = P.ID WHERE MP.ID_Member =1)
    }




}