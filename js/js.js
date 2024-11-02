const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    // Puedes personalizar el correo electrónico que recibes aquí
    const recipient = 'tu-correo-electronico@dominio.com';
    const subject = `Nuevo mensaje de ${name} (${email})`;
    const body = `Mensaje: ${message}`;

    // Configura los detalles de tu proveedor de correo electrónico aquí
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
});