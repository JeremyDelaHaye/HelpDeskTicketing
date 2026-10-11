<?php

require_once 'db.php'; //loads db connection file 

$data = json_decode(file_get_contents('php://input'), true); // gets stuff from json.stringify and makes it into php array stores in $data

// gets the action from $data array amdn stores it into $action  
$action = $data['action'];

if ($action === 'create_user')
{
    $stmt = $conn->prepare("INSERT INTO users (username, email, password_hash, is_technician) VALUES (:username, :email, :password_hash, :is_technician)");
    $stmt->execute
    ([
        ':username'      => $data['username'], // place to put it => item from $data 
        ':email'         => $data['email'],
        ':password_hash' => password_hash($data['password_hash'],PASSWORD_DEFAULT), //if(password_verify($inputPassword,$password_hash))
        ':is_technician' => (int) $data['is_technician']
    ]);
    echo $conn->lastInsertId();
}

if ($action === 'login')
{
    $stmt = $conn->prepare("SELECT id, username, password_hash, istechnician FROM users WHERE username = username:")
    $stmt = $conn->execute([':username' => $data['username']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user === false)
    {
        echo('no username found ')
    }
    else 
    {
        echo($user)
    }


}





