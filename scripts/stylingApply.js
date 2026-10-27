const GLASS_PANELS = ['#loginOrCreate', '#createAccount', '#login','#createTicket'];
function applyUI(root = document) 
{
    // Page-wide: type scale and automatic dark mode
    document.body.classList.add('p-type', 'p-auto-dark-mode');

    // Panels -> glass cards
    root.querySelectorAll('.panel').forEach(el => el.classList.add('p-glass-md'));

    // Buttons -> glass buttons; submit buttons get the prominent (accent) style
    root.querySelectorAll('button').forEach(btn => {
        btn.classList.add('p-button', 'p-button-touch');
        const isSubmit = btn.id.toLowerCase().includes('submit');
        btn.classList.add(isSubmit ? 'p-button-glass-prominent' : 'p-button-glass');
    });

    // Text-like inputs -> filled touch fields
    root.querySelectorAll(
        'input[type="text"], input[type="email"], input[type="password"], input[type="search"]'
    ).forEach(input => {
        input.classList.add('p-field', 'p-field-touch', 'p-field-touch-filled');
    });

    // Selects -> wrapped touch selects
    root.querySelectorAll('select').forEach(select => {
        if (select.parentElement.classList.contains('p-select')) return;
        const wrapper = document.createElement('div');
        wrapper.className = 'p-select p-select-touch';
        select.parentNode.insertBefore(wrapper, select);
        wrapper.appendChild(select);
    });

    // Checkboxes -> switches (needs <label class="p-switch"><input><span></span></label>)
    root.querySelectorAll('input[type="checkbox"]').forEach(box => {
        if (box.closest('.p-switch')) return;
        const label = document.createElement('label');
        label.className = 'p-switch p-switch-touch';
        box.parentNode.insertBefore(label, box);
        label.appendChild(box);                       // same element, so your id and listeners survive
        label.appendChild(document.createElement('span'));
    });
}
document.addEventListener('DOMContentLoaded', () => applyUI());