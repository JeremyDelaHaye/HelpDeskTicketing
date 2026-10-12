// when pulling from database to compare take is engineer val. 

document.getElementById('loginSubmitBtn').addEventListener('click',async () =>
{
    let inputUsername = document.getElementById('loginUsername').value
    let inputPassword = document.getElementById('loginPassword').value

    const response = await fetch('../db/api.php', //sends request to api.php
    {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            action: 'login',
            username: inputUsername,
            password: inputPassword
        })
    });
    
    switch(response)
    {
        case 1: alert('Invalid Username')
        break;
        case 2: // login
        break;
        case 3: alert('Invalid Password')
        break;
    }
});
