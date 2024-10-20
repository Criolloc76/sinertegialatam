document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const countryCode = document.getElementById('country-select').value;
    let phoneNumber = document.getElementById('phone-number').value;

    // Si es México, siempre añade "521" y toma los últimos 10 dígitos
    if (countryCode === "52") {
        phoneNumber = "521" + phoneNumber.slice(-10);
    }

    // Validación simple para longitud del número según el país
    if (isValidPhoneNumber(countryCode, phoneNumber)) {
        // Datos a enviar
        const formData = new FormData();
        formData.append('country', countryCode);
        formData.append('phone', phoneNumber);

        // Enviar los datos a Google Sheets
        fetch('https://script.google.com/macros/s/AKfycbyCCsp9AxdkYmGDvyOXU3ye0D5c5G10AWofBXYKGYFZzdrGCHsTwJ4c3dnJnMl808MGXA/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            alert('Número registrado con éxito');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al registrar el número.');
        });
    } else {
        alert('El número de teléfono no es válido.');
    }
});

function isValidPhoneNumber(countryCode, phoneNumber) {
    const phoneLengths = {
        "52": 12, // México con el "521" incluido
        "57": 10, // Colombia
        "51": 9   // Perú
        // Agrega más países y sus longitudes
    };

    return phoneNumber.length === phoneLengths[countryCode];
}
