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

    // get project info
    function getProjectInfo($projectID){

        // select all query
        $query = "SELECT S.ID AS sensor_id, S.name AS sensor_name, S.unit AS sensor_unit, S.description AS sensor_description, P.* FROM Sensor S LEFT JOIN Project_Sensor PS ON PS.ID_Sensor = S.ID LEFT JOIN Project P ON P.ID = PS.ID_Project WHERE PS.ID_Project =" .$projectID;


        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;

    }



}