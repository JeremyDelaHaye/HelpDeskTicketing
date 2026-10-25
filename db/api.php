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
    $stmt = $conn->prepare("SELECT id, username, password_hash, is_technician FROM users WHERE username = :username");
    $stmt->execute([':username' => $data['username']]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
    if ($user === false)
    {
        echo json_encode(['status' => 1]);
    }
    
    else 
    {
        if(password_verify($data['password'],$user['password_hash']))
        {
            echo json_encode(['status' => 2, 'userId' => $user['id'],'isTechnician' => $user['is_technician']]);
        }
        else
        {
            echo json_encode(['status' => 3]);
        }     
    }
}

if ($action === 'createTicket')
{
    $stmt = $conn->prepare("INSERT INTO tickets (priority, user_id, description, title) VALUES (:priority, :user_id, :description, :title)");
    $stmt->execute
    ([
        ':priority'      => $data['priority'], // place to put it => item from $data 
        ':user_id'         => $data['user_id'],
        ':description' => $data['description'], 
        ':title' => $data['title']
    ]);
    echo $conn->lastInsertId();
}

if ($action === 'getTickets')
{
    $stmt = $conn->prepare("SELECT * FROM tickets WHERE status != 1");
    $stmt->execute();
    $tickets = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($tickets); 
}

 


