<?php
class Project{

    // database connection and table name
    private $conn;

    // object properties
    public $ID;
    public $name;
    public $description;
    public $sensor_id;
    public $sensor_name;
    public $sensor_unit;
    public $sensor_description;
    public $arduino;
    public $location;
    public $location_description;
    public $sensor_status;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // get user projects
    function getProjects($userID){

        // select all query
        $query = "SELECT P.* FROM Project P LEFT JOIN Member_Project MP ON MP.ID_Project = P.ID WHERE MP.ID_Member =" . $userID;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }

    // get project sensor
    function getProjectSensor($projectID){

        // select all query
        $query = "SELECT S.ID AS sensor_id, S.name AS sensor_name, S.unit AS sensor_unit, S.description AS sensor_description, S.max_val AS sensor_maxval, S.min_val as sensor_minval, A.name AS arduino, L.name AS location, L.description AS location_description, ST.name as sensor_status FROM Sensor S LEFT JOIN Sensor_Arduino SA ON SA.ID_Sensor = S.ID LEFT JOIN Arduino A ON SA.ID_Arduino = A.ID LEFT JOIN Project_Sensor PS ON PS.ID_Sensor = S.ID LEFT JOIN Sensor_Location SL ON SL.ID_Sensor = S.ID LEFT JOIN Location L ON SL.ID_Location = L.ID LEFT JOIN Project P ON P.ID = PS.ID_Project LEFT JOIN Sensor_Status SS ON SS.ID_Sensor = S.ID LEFT JOIN Status ST ON ST.ID = SS.ID_Status WHERE PS.ID_Project =" .$projectID;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;

    }

    function getProjectInfo($projectID){

        // select all query
        $query = "SELECT * FROM Project WHERE ID =" .$projectID;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;

    }



}