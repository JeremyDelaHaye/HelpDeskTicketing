document.getElementById('submitTicket').addEventListener('click',async () =>
{
    let title = document.getElementById('ticketTitle').value;
    let descripton = document.getElementById('ticketDescription').value;
    let priority = document.getElementById('priority').value
    let user_id 

    const response = await fetch('../db/api.php', //sends request to api.php
    {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({action: 'createTicket',
            title: title,
            //user_id: 
            descripton: descripton,
            priority: priority
        })
    });

    const result = await response.text();


});

