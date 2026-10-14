document.getElementById('test').addEventListener('click',async () =>
{
    const response = await fetch('../db/api.php', //sends request to api.php
    {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({action: 'getTickets'})
    });
    const text = await response.text();
    console.log(text);  
});