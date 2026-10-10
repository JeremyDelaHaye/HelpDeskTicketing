<?php

require_once 'db.php'; //loads db connection file 

$data = json_decode(file_get_contents('php://input'), true); // gets stuff from json.stringify and makes it into php array stores in $data

// gets the action from $data array adn stores it into $action  
$action = $data['action'];

if ($action === 'create_user')
{
    $stmt = $conn->prepare("INSERT INTO users (username, email, password_hash, is_technician) VALUES (:username, :email, :password_hash, :is_technician)");
    $stmt->execute
    ([
        ':username'      => $data['username'], // place to put it => item from $data 
        ':email'         => $data['email'],
        ':password_hash' => $data['password_hash'],
        ':is_technician' => (int) $data['is_technician']
    ]);
    echo $conn->lastInsertId();
}


