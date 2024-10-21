document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío normal del formulario

    // Obtener datos del formulario
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;
    var country = document.getElementById('country-select').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone-number').value;

    // Crear objeto de datos a enviar
    var data = {
        id: id,
        nombre: name,
        pais: country,
        email: email,
        telefono: phone
    };

    // Hacer la solicitud fetch a la API del script
    fetch('https://script.google.com/macros/s/AKfycbzWJ48_4j_yvuatbyYf_Rs5qy9DecuDvalCGAvaGnJqSWDdegZSfbUarF3Uhe9C1TgD4A/exec', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(result => {
        // Mostrar el resultado en el formulario
        document.getElementById('form-response').innerText = result.message || 'Datos enviados correctamente.';
        // Limpiar el formulario
        document.getElementById('lead-form').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('form-response').innerText = 'Error al enviar los datos. Inténtalo de nuevo.';
    });
});
