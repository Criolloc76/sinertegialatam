document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const countryCode = document.getElementById('country-select').value;
    const whatsappNumber = document.getElementById('whatsapp-number').value;
    const validationMessage = document.getElementById('validation-message');

    // Validar el número de acuerdo al país seleccionado
    let isValid = false;

    switch(countryCode) {
        case '521': // México
            isValid = /^521\d{10}$/.test(whatsappNumber);
            break;
        case '57': // Colombia
            isValid = /^57\d{10}$/.test(whatsappNumber);
            break;
        case '51': // Perú
            isValid = /^51\d{9}$/.test(whatsappNumber);
            break;
        case '506': // Costa Rica
            isValid = /^506\d{8}$/.test(whatsappNumber);
            break;
        case '593': // Ecuador
            isValid = /^593\d{9}$/.test(whatsappNumber);
            break;
        case '507': // Panamá
            isValid = /^507\d{8}$/.test(whatsappNumber);
            break;
        case '58': // Venezuela
            isValid = /^58\d{10}$/.test(whatsappNumber);
            break;
        default:
            isValid = false;
    }

    if (isValid) {
        validationMessage.textContent = "Número válido.";
        validationMessage.style.color = "green";
        // Aquí puedes enviar el número al servidor o Google Sheet
    } else {
        validationMessage.textContent = "Número inválido. Por favor, revise el formato.";
        validationMessage.style.color = "red";
    }
});
