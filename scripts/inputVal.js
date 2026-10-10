function validate(input,inputName)
{
   
    if (input === null || input === '')
    {
        alert(inputName,  "cannot be null ")
        
        return false
    }
    else
    {
        return true
    }
}