let tickets = [];
let displayIndex = 0;
const PAGE_SIZE = 4;

document.addEventListener('DOMContentLoaded', async function()
{
    const response = await fetch('../db/api.php',
    {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({action: 'getTickets'})
    });
    tickets = await response.json();   // assigns the top-level variable
    refreshTickets();
});

document.getElementById('prevBtn').addEventListener('click', () =>
{
    if (displayIndex > 0)
    {
        displayIndex--;
        refreshTickets();
    }
});

document.getElementById('nextBtn').addEventListener('click', () =>
{
    if (displayIndex + PAGE_SIZE < tickets.length)
    {
        displayIndex++;
        refreshTickets();
    }
});

function refreshTickets()
{
    document.getElementById('ticketHolder').innerHTML = '';
    let ticketsDisplay = [];
    for (let i = displayIndex; i < displayIndex + 4 && i < tickets.length; i++)
    {
        ticketsDisplay.push(tickets[i]);
    }
    displayTickets(ticketsDisplay);
}

function displayTickets(tickets)
{
    const ticketHolder = document.getElementById('ticketHolder');
    for(let i = 0; i < tickets.length; i ++)
    {
        //creates ticket div 
        const ticket = document.createElement('div');

        ticket.className = 'ticket'

        //title
        const title = document.createElement('h1');
        title.textContent = tickets[i].title;

        const titleNum = document.createElement('div');
        titleNum.className = 'titleNum';

        const num = document.createElement('span');
        num.textContent = '#' + (displayIndex + i + 1);

        
        titleNum.appendChild(title);
        titleNum.appendChild(num);

        ticket.appendChild(titleNum);   // replaces ticket.appendChild(title)

        //priority
        const priority = document.createElement('p')
        console.log(tickets[i].priority)
        switch(tickets[i].priority)
        {
            case 1:
                priority.textContent = 'Priority: Low';
            break;
            case 2:
                priority.textContent = 'Priority: Medium';
            break;
            case 3:
                priority.textContent = 'Priority: High';
            break;
        }
        ticket.appendChild(priority)

        const createdAt = document.createElement('p')
        createdAt.textContent = tickets[i].created_at
        ticket.appendChild(createdAt)

        //description
        const description = document.createElement('p')
        description.textContent = tickets[i].description
        ticket.appendChild(description)

        //adds ticket div to holder div 
        ticketHolder.appendChild(ticket);
    }
};