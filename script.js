document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío normal del formulario

    // Obtener datos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var country = document.getElementById('country-select').value;
    var phone = document.getElementById('phone-number').value;

    // Crear objeto de datos a enviar
    var data = {
        name: name,
        email: email,
        country: country,
        phone: phone
    };

    // Hacer la solicitud fetch a la API del script
    fetch('https://script.google.com/macros/s/AKfycbw3h2___Z_wWrnDiNQjKpmlSv6tAHWhkLC9a7F26B-woo5zdODDZk9Jq4K-7XSTAd9H/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        // Mostrar el resultado en el formulario
        document.getElementById('form-response').innerText = result.message;
        // Limpiar el formulario
        document.getElementById('lead-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('form-response').innerText = 'Error al enviar los datos. Inténtalo de nuevo.';
    });
});
