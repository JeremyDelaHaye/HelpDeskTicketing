document.querySelectorAll('input').forEach(input => 
{
    if (input.type === 'checkbox') 
    {
        input.checked = false;
    } else 
    {
        input.value = '';
    }
});