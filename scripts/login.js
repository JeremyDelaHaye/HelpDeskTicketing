// when pulling from database to compare take is engineer val. 

document.getElementById('loginSubmitBtn').addEventListener('click',async () =>
{
    console.log('loginpress')
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



});
