document.addEventListener('DOMContentLoaded', function() {
    // --- Lógica del menú de hamburguesa ---
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-list li a');

    hamburgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });

    // --- Lógica del formulario de contacto ---
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    const backendUrl = 'https://mb-insumos.onrender.com/send-email';

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            formMessage.textContent = 'Enviando mensaje...';
            formMessage.style.color = '#333';

            try {
                const response = await fetch(backendUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    formMessage.textContent = result.message;
                    formMessage.style.color = 'green';
                    contactForm.reset();
                } else {
                    formMessage.textContent = result.message || 'Error desconocido al enviar el mensaje.';
                    formMessage.style.color = 'red';
                }
            } catch (error) {
                console.error('Error de red o servidor:', error);
                formMessage.textContent = 'No se pudo conectar con el servidor. Por favor, revisa tu conexión o inténtalo más tarde.';
                formMessage.style.color = 'red';
            }
        });
    }

    // --- Lógica del Lightbox (Portafolio) ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeBtn = document.querySelector('.close-btn');
    const portfolioImages = document.querySelectorAll('.portfolio-image');
    const portfolioLinks = document.querySelectorAll('.portfolio-link');

    // Maneja el clic en el contenedor de la imagen
    portfolioImages.forEach(item => {
        item.addEventListener('click', () => {
            // Se obtiene la URL de la imagen del atributo 'data-image-url'
            const imageUrl = item.getAttribute('data-image-url');
            if (imageUrl) {
                lightboxImage.src = imageUrl;
                lightbox.classList.add('visible');
            }
        });
    });
    
    // Maneja el clic en el enlace "Vista Previa"
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Detiene el comportamiento predeterminado del enlace (#)
            
            // Encuentra el elemento padre que contiene la imagen
            const portfolioItem = link.closest('.portfolio-item');
            const imageContainer = portfolioItem ? portfolioItem.querySelector('.portfolio-image') : null;
            
            if (imageContainer) {
                const imageUrl = imageContainer.getAttribute('data-image-url');
                if (imageUrl) {
                    lightboxImage.src = imageUrl;
                    lightbox.classList.add('visible');
                }
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('visible');
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('visible');
            }
        });
    }

    // --- Lógica de los filtros del portafolio ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});