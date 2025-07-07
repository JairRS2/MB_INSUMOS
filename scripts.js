document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');

    hamburgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Cierra el menú cuando se hace clic en un enlace (útil en móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });
    // --- CÓDIGO PARA EL FORMULARIO DE CONTACTO ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // **IMPORTANTE: Cambia esta URL a la URL de tu backend desplegado en Render**
    // Mientras pruebas localmente, usa: 'http://localhost:3000/send-email'
    // Una vez desplegado en Render, será algo como: 'https://tu-nombre-de-servicio.onrender.com/send-email'
    const backendUrl = 'https://mb-insumos.onrender.com/send-email'; // <<< ¡CAMBIAR ESTO AL DESPLEGAR!

    contactForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Previene el envío HTML tradicional del formulario

        // Recolecta los datos del formulario
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        // Muestra un mensaje de "enviando"
        formMessage.textContent = 'Enviando mensaje...';
        formMessage.style.color = '#333'; // Color neutro

        try {
            // Realiza la petición POST al backend
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Indicamos que estamos enviando JSON
                },
                body: JSON.stringify(data) // Convertimos los datos a JSON
            });

            const result = await response.json(); // Parsea la respuesta JSON del servidor

            if (response.ok) { // Si la respuesta HTTP fue 200 OK
                formMessage.textContent = result.message; // Mensaje de éxito del backend
                formMessage.style.color = 'green'; // Color verde para éxito
                contactForm.reset(); // Limpia el formulario
            } else {
                // Si hubo un error (ej. 400, 500)
                formMessage.textContent = result.message || 'Error desconocido al enviar el mensaje.';
                formMessage.style.color = 'red'; // Color rojo para error
            }
        } catch (error) {
            // Captura errores de red (ej. servidor no disponible)
            console.error('Error de red o servidor:', error);
            formMessage.textContent = 'No se pudo conectar con el servidor. Por favor, revisa tu conexión o inténtalo más tarde.';
            formMessage.style.color = 'red';
        }
    });
});
