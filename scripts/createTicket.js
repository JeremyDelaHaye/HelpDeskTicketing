document.getElementById('submitTicket').addEventListener('click',async () =>
{
    let title = document.getElementById('ticketTitle').value;
    let description = document.getElementById('ticketDescription').value;
    let priority = document.getElementById('priority').value
    const user_id = localStorage.getItem('userId');   

    const response = await fetch('../db/api.php', //sends request to api.php
    {
        
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({action: 'createTicket',
            title: title,
            user_id: user_id,
            description: description,
            priority: priority
        })
    });
    const text = await response.text();
    console.log(text);
});

