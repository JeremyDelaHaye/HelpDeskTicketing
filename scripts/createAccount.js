document.getElementById('submitBtn').addEventListener('click',async () =>
{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;
    const isTechnician = document.getElementById('isTechnician').checked
    
    //validate(username, "username")
    //validate(password, "password")
    //validate(email, "email")


    console.log(username)

    const response = await fetch('../db/api.php', //sends request to api.php
    {
        method: 'POST', // defines method needed 
        headers: {'Content-Type' : 'application/json'}, // telling php its receving json 
        
        body:  JSON.stringify({action: 'create_user',
        username: username,
        password_hash: password, 
        email: email,
        is_technician: isTechnician})
    });     

    const result = await response.text();
});