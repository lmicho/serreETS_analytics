<?php
class DataInfo{

    // database connection and table name
    private $conn;
    private $table_name = "DataInfo";

    // object properties
    public $id;
    public $data_entry;
    public $input_date;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // read dataInfo
    function read(){

        // select all query
        $query = "SELECT * FROM " . $this->table_name;



        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;
    }




}