document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const pais = document.getElementById('country-select').value;
    const email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;

    // Validar y ajustar el número de teléfono para México
    if (pais === '52') {
        telefono = '521' + telefono.slice(-10); // Asegura que comience con 521 y toma los últimos 10 dígitos
    }

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('pais', pais);
    formData.append('email', email);
    formData.append('telefono', telefono);

    // Asegúrate de haber reemplazado la URL de Apps Script correcta aquí
    fetch('TU_URL_DE_APPS_SCRIPT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Registro exitoso.");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error al registrar los datos.");
    });
});

// Función del bot de WhatsApp
function whatsappBot() {
    alert('¡Hola! Soy el bot con IA de Sinergia LATAM. ¿En qué puedo ayudarte hoy?');
    window.open('https://wa.me/521XXXXXXXXXX'); // Reemplaza con tu número de WhatsApp
}
