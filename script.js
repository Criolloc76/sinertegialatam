document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const countryCode = document.getElementById('country-select').value;
    let phoneNumber = document.getElementById('phone-number').value;

    // Si es México, verifica si el número empieza con "1"
    if (countryCode === "52") {
        if (!phoneNumber.startsWith("1")) {
            phoneNumber = "1" + phoneNumber;
        }
    }

    // Validación simple para longitud del número según el país
    if (isValidPhoneNumber(countryCode, phoneNumber)) {
        alert(`Número registrado: +${countryCode}${phoneNumber}`);
        // Aquí puedes enviar el número a tu servidor o a la hoja de Google
    } else {
        alert('El número de teléfono no es válido.');
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
