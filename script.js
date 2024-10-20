document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    const countryCode = document.getElementById('country-select').value;
    let phoneNumber = document.getElementById('phone-number').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Ajuste especial para México, asegurando que el número tenga "521" y 10 dígitos
    if (countryCode === "52") {
        phoneNumber = "521" + phoneNumber.slice(-10); // Aseguramos que tome solo los últimos 10 dígitos
    }

    // Validar el número de teléfono según el país
    if (isValidPhoneNumber(countryCode, phoneNumber)) {
        const formData = {
            nombre: name,
            pais: countryCode,
            email: email,
            telefono: phoneNumber
        };

        // Enviar datos a Google Sheets
        fetch('https://script.google.com/macros/s/AKfycbyCCsp9AxdkYmGDvyOXU3ye0D5c5G10AWofBXYKGYFZzdrGCHsTwJ4c3dnJnMl808MGXA/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData)
        }).then(response => {
            alert('Registro exitoso');
        }).catch(error => {
            alert('Error en el registro, intente nuevamente.');
            console.error('Error:', error);
        });
    } else {
        alert('El número de teléfono no es válido.');
    }
});

function isValidPhoneNumber(countryCode, phoneNumber) {
    const phoneLengths = {
        "52": 12, // México con el "521" incluido
        "57": 10, // Colombia
        "51": 9,  // Perú
        "54": 10, // Argentina
        "55": 11, // Brasil
        "1": 10,  // USA y Canadá
        // Agrega más países y sus respectivas longitudes
    };

    return phoneNumber.length === phoneLengths[countryCode];
}

// Funcionalidad para el botón flotante de WhatsApp
document.getElementById('chatbot-icon').addEventListener('click', function () {
    alert('Hola! Soy el Bot con IA de Sinergia LATAM. ¿En qué te puedo ayudar hoy?');
    window.open('https://wa.me/YOUR_PHONE_NUMBER', '_blank');
});
