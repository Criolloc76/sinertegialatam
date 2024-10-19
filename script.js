document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const countryCode = document.getElementById('country-select').value;
    let phoneNumber = document.getElementById('phone-number').value;
    const validationMessage = document.getElementById('validation-message'); // Elemento para mostrar mensajes

    // Limpia mensajes anteriores
    validationMessage.textContent = '';

    // Si es México, verifica si el número empieza con "1"
    if (countryCode === "52") {
        if (!phoneNumber.startsWith("1")) {
            phoneNumber = "1" + phoneNumber;
        }
    }

    // Validación para la longitud del número según el país
    if (isValidPhoneNumber(countryCode, phoneNumber)) {
        validationMessage.textContent = `Número registrado: +${countryCode}${phoneNumber}`;
        validationMessage.style.color = 'green'; // Mensaje en verde si es válido
    } else {
        validationMessage.textContent = 'El número de teléfono no es válido.';
        validationMessage.style.color = 'red'; // Mensaje en rojo si es inválido
    }
});

function isValidPhoneNumber(countryCode, phoneNumber) {
    const phoneLengths = {
        "52": 11, // México con el "1" incluido
        "57": 10, // Colombia
        "51": 9   // Perú
        // Agrega más países y sus longitudes
    };

    return phoneNumber.length === phoneLengths[countryCode];
}
