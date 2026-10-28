document.addEventListener('DOMContentLoaded', async function()
{
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

    const ticketHolder = document.getElementById('ticketHolder');
    for(let i = 0; i < tickets.length; i ++)
    {
        //creates ticket div 
        const ticket = document.createElement('div');

        ticket.className = 'ticket'

        //title
        const title = document.createElement('h1');
        title.textContent = tickets[i].title;
        ticket.appendChild(title);

        //priority
        const priority = document.createElement('p')
        switch(tickets[i].priority)
        {
            case 1:
                priority.textContent = 'High'
            case 2:
                priority.textContent = 'Medium'
            case 3:
                priority.textContent = 'Low'
        }
        ticket.appendChild(priority)

        const createdAt = document.createElement('p')
        createdAt.textContent = tickets[i].created_at
        ticket.appendChild(createdAt)

        //description
        const description = document.createElement('p')
        description.textContent = tickets[i].description
        ticket.appendChild(description)


        console.log(ticket)

        //adds ticket div to holder div 
        ticketHolder.appendChild(ticket);
    }
});