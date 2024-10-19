document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const whatsappInput = document.getElementById('whatsapp').value;
    const paisSelect = document.getElementById('pais');
    const selectedCountry = paisSelect.options[paisSelect.selectedIndex].value;
    const lada = paisSelect.options[paisSelect.selectedIndex].dataset.lada;
    const isValidWhatsApp = validateWhatsApp(whatsappInput, selectedCountry);

    if (isValidWhatsApp) {
        alert('Te has registrado correctamente. ¡Gracias!');
        // Aquí puedes agregar la lógica para enviar los datos a Google Sheets.
    } else {
        alert('Número de WhatsApp no válido para el país seleccionado (' + lada + ').');
    }
});

function validateWhatsApp(number, country) {
    // Validar el número de WhatsApp basado en el país
    const countryDigits = {
        'Colombia': 10,
        'México': 10,
        'Perú': 9,
        'Costa Rica': 8,
        'Ecuador': 9,
        'Panamá': 7,
        'Venezuela': 10,
    };

    const expectedLength = countryDigits[country] || 10; // Por defecto, 10 dígitos
    return number.length === expectedLength && /^\d+$/.test(number);
}

document.getElementById('chatbot-button').addEventListener('click', function() {
    document.getElementById('chatbot-modal').style.display = 'block';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chatbot-modal').style.display = 'none';
});

document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if (userInput) {
        document.getElementById('chat-message').textContent = 'Tú: ' + userInput;
        // Aquí puedes agregar la lógica para el chatbot interactivo.
        document.getElementById('user-input').value = ''; // Limpiar el campo de entrada
    }
});

// Cerrar el modal al hacer clic fuera de la ventana
window.onclick = function(event) {
    const modal = document.getElementById('chatbot-modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
