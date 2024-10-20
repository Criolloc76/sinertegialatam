// Mostrar el menú desplegable en móviles
document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('show');
});

// Lógica para el formulario de registro
document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-select').value;
    let phoneNumber = document.getElementById('phone-number').value;

    // Ajustar el formato de número para México
    if (countryCode === "52") {
        phoneNumber = phoneNumber.slice(-10);  // Tomar los últimos 10 dígitos
        if (!phoneNumber.startsWith("1")) {
            phoneNumber = "1" + phoneNumber;
        }
    }

    // Validar y enviar datos si todo es correcto
    if (isValidPhoneNumber(countryCode, phoneNumber)) {
        const data = {
            "name": name,
            "email": email,
            "country": countryCode,
            "phone": phoneNumber
        };

        // Enviar los datos a la hoja de Google Sheets
        fetch("https://script.google.com/macros/s/AKfycbyCCsp9AxdkYmGDvyOXU3ye0D5c5G10AWofBXYKGYFZzdrGCHsTwJ4c3dnJnMl808MGXA/exec", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la respuesta del servidor: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {
            alert(result.message);
            document.getElementById('lead-form').reset();
        })
        .catch(error => {
            alert(`Hubo un error al enviar los datos: ${error.message}`);
            console.error('Error:', error);
        });
    } else {
        alert('Por favor, ingresa un número de teléfono válido.');
    }
});

// Validar el número de teléfono basado en el país
function isValidPhoneNumber(countryCode, phoneNumber) {
    const phoneLengths = {
        "52": 11, // México con "1" incluido
        "57": 10, // Colombia
        "51": 9   // Perú
        // Agrega más países y sus longitudes aquí si es necesario
    };
    return phoneNumber.length === phoneLengths[countryCode];
}

// Simulación de bot de WhatsApp
document.getElementById('whatsapp-button').addEventListener('click', function () {
    alert('¡Hola! Soy el Bot de IA de Sinergia LATAM. ¿En qué puedo ayudarte hoy?');
    // Redirigir a WhatsApp
    window.open('https://wa.me/xxxxxxxxxxx?text=Hola,%20necesito%20ayuda%20con%20Sinergia%20LATAM', '_blank');
});
