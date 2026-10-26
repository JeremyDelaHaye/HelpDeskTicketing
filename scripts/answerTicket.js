document.addEventListener('DOMContentLoaded', async function()
{

    console.log('loaded')
    const response = await fetch('../db/api.php', //sends request to api.php
    {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({action: 'getTickets'})
    });
    const tickets = await response.json();

    tickets[0]              // first ticket (object)
    tickets[0].title        // "test1"
    tickets[1].user_id      // 18
    tickets.length 

    const ticketHolder = document.getElementById('ticketHolder');
    for(let i; i < tickets.length; i ++)
    {
        //creates ticket div 
        const ticket = document.createElement('div');

        const title = document.createElement('p');
        title.textContent = tickets[i].title;
        ticket.appendChild(title);

        const description = document.createElement('p')
        description.textContent = tickets[i].description
        ticket.appendChild(description)

        console.log(ticket)

        //adds ticket div to holder div 
        ticketHolder.appendChild(ticket);
    }
});