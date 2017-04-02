<?php
class Sensor{

    // database connection and table name
    private $conn;

    // object properties
    public $ID;
    public $name;
    public $unit;
    public $description;
    public $arduino;
    public $location;
    public $status;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // get sensors associated with user project
    function getSensors($userID){
        $query = "SELECT S.*, A.name AS arduino, L.name AS location, ST.name AS status FROM Sensor S LEFT JOIN Project_Sensor PS ON PS.ID_Sensor = S.ID LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON SS.ID_Status = ST.ID WHERE PS.ID_Project IN (SELECT P.ID FROM Project P LEFT JOIN Member_Project MP ON MP.ID_Project = P.ID WHERE MP.ID_Member =" . $userID . ")";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }



}