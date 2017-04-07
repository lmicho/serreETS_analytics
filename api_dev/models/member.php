<?php
class Member{

    // database connection and table name
    private $conn;

    // object properties
    public $id;
    public $firstName;
    public $lastName;
    public $email;
    public $password;
    public $phone;
    public $description;
    public $firstVisitCheck;

    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }

    // get member info
    function getMemberInfo($userId){
        // select member & associated password
        $query = "SELECT * FROM Member WHERE ID =" . $userId;

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;

    }

    // login member
    function login($email, $password){

        // select member & associated password
        $query = "SELECT * FROM Member WHERE password = '" . trim($password) . "' AND email = '" . trim($email) . "'";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // execute query
        $stmt->execute();

        return $stmt;

    }

    // logout member
    function logout(){

        $test = "Done";

        var_dump($test);
        //session_start();
        //session_destroy();

    }

    //update member password
    function updatePassword($ID, $password){

        $password = hash('sha256', $password);

        // update query
        $query = "UPDATE Member SET password = :password, firstVisitCheck = :firstVisitCheck WHERE ID = :ID";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $userId = $ID;
        $password = $password;
        $firstVisitCheck = 0;

        // bind new values
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':firstVisitCheck', $firstVisitCheck);
        $stmt->bindParam(':ID', $userId);


        // execute the query
        if($stmt->execute()){
            return true;
        }else{
            return false;
        }

    }

    //update member info
    function updateMemberInfo($ID, $password, $phone, $description){

        $password = hash('sha256', $password);

        // update query
        $query = "UPDATE Member SET password = :password, phone = :phone, description = :description WHERE ID = :ID";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $userId = $ID;
        $password = $password;
        $phone = $phone;
        $description = $description;

        // bind new values
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':phone', $phone);
        $stmt->bindParam(':description', $description);
        $stmt->bindParam(':ID', $userId);


        // execute the query
        if($stmt->execute()){
            return true;
        }else{
            return false;
        }

    }




}