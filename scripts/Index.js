//button hiding 

const div1 = document.getElementById('loginOrCreate');
const div2 = document.getElementById('createAccount');
const div3 = document.getElementById('login');

document.getElementById('createBtn').addEventListener('click', () => 
{
    div1.classList.add('hidden');
    div2.classList.remove('hidden');
});

document.getElementById('loginBtn').addEventListener('click', () => 
{
    div1.classList.add('hidden');
    div3.classList.remove('hidden');
});

document.getElementById('createBackBtn').addEventListener('click', () => 
{
    div1.classList.remove('hidden')
    div2.classList.add('hidden');
});

document.getElementById('loginBackBtn').addEventListener('click', () => 
{
    div1.classList.remove('hidden')
    div3.classList.add('hidden');
});

