// Funzione per generare fiocchi di neve (migliorata)
function createSnowflake() {
    const container = document.querySelector('.snowflake-container');
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';

    // Random position and size
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.top = -10 + 'px'; // Start slightly above the viewport
    
    const duration = Math.random() * 8 + 7; // 7 to 15 seconds
    const size = Math.random() * 1.5 + 0.8; // 0.8em to 2.3em
    
    snowflake.style.animationDuration = duration + 's';
    snowflake.style.fontSize = size + 'em';
    snowflake.style.opacity = Math.random() * 0.4 + 0.4;
    
    // Add a random horizontal drift/delay for variation
    snowflake.style.animationDelay = '-' + Math.random() * 5 + 's';

    container.appendChild(snowflake);

    // Remove snowflake after it falls to prevent DOM clutter
    setTimeout(() => {
        snowflake.remove();
    }, (duration * 1000) + 100); 
}

// Genera un nuovo fiocco di neve ogni 300 millisecondi
setInterval(createSnowflake, 300); 


// Logica di Gestione del Form RSVP
// La logica client-side è stata mantenuta, ma ricordati che in un ambiente reale
// dovrai inviare questi dati ad un server (come Formspree o un backend)
const form = document.getElementById('rsvpForm');
const successMessage = document.getElementById('successMessage');
const responses = []; // Array per simulare la raccolta delle risposte (solo in console)

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const ospiti = document.getElementById('ospiti').value;
    const accessorio = document.getElementById('accessorio').value;
    const messaggio = document.getElementById('messaggio').value;
    
    const response = {
        nome: nome,
        ospiti: ospiti,
        accessorio: accessorio,
        messaggio: messaggio,
        data: new Date().toLocaleString('it-IT')
    };
    
    responses.push(response);
    console.log('--- RSVP Registrato (Visualizza solo Console) ---');
    console.log('Risposta:', response);
    
    // Animazione di Successo
    form.style.opacity = '0';
    setTimeout(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
    }, 500); // Wait for fade out

    // Nasconde il messaggio di successo e ripristina il form dopo 7 secondi
    setTimeout(() => {
        form.reset();
        successMessage.style.display = 'none';
        form.style.display = 'block';
        form.style.opacity = '1';
    }, 7000);
});