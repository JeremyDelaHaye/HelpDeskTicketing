
//creating account. 
document.getElementById('submitBtn').addEventListener('click',async () =>
{
    let username = document.getElementById('createdUsername').value;
    let password = document.getElementById('createdPassword').value;
    let email = document.getElementById('createdEmail').value;
    let isTechnician = document.getElementById('isTechnician').checked
    
    //validate(username, "username")
    //validate(password, "password")
    //validate(email, "email")

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
