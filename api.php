<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require_once 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$action = $data['action'];

if ($action === 'set_workout') 
{
    $stmt = $conn->prepare("INSERT INTO workouts (name) VALUES (:name)");
    $stmt->execute([':name' => $data['name']]);
    echo $conn->lastInsertId();
}

if ($action === 'get_workouts') 
{
    $stmt = $conn->prepare("SELECT * FROM workouts");
    $stmt->execute();
    echo json_encode($stmt->fetchAll());
}

