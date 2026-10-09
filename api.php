<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$action = $data['action'];


//code to refactor 
if ($action === 'set_workout') 
{
    $stmt = $conn->prepare("INSERT INTO workouts (name) VALUES (:name)");
    $stmt->execute([':name' => $data['name']]);
    echo $conn->lastInsertId();
}

if ($action === 'create_username') 
{
    $stmt = $conn->prepare("INSERT INTO users (username) VALUES (:username)");
    $stmt->execute([':username' => $data['username']]);
    echo $conn->lastInsertId();
}

if ($action === 'create_passowrd')
{
    $stmt = $conn->prepare("INSERT INTO users (password_hash) VALUES (:password_hash)");
    $stmt->execute([':password_hash' => $data['password_hash']]);
    echo $conn->lastInsertId();
}







if ($action === 'get_workouts') 
{
    $stmt = $conn->prepare("SELECT * FROM workouts");
    $stmt->execute();
    echo json_encode($stmt->fetchAll());
}

