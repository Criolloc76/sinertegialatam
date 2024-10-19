document.addEventListener('DOMContentLoaded', () => {
    const btnVerificar = document.getElementById('btn-verificar');
    const formRegistro = document.getElementById('form-registro');
    const paisSelect = document.getElementById('pais');
    const numeroWhatsappInput = document.getElementById('numero-whatsapp');
    const mensajeRegistro = document.getElementById('mensaje-registro');

    // Manejar la verificación de identidad
    btnVerificar.addEventListener('click', () => {
        // Simulación de verificación de identidad
        document.getElementById('mensaje-verificacion').style.display = 'block';
        setTimeout(() => {
            document.getElementById('mensaje-verificacion').style.display = 'none';
            alert('Identidad verificada con éxito.');
        }, 2000);
    });

    // Validación del número de WhatsApp al enviar el formulario
    formRegistro.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío del formulario por defecto
        const paisCodigo = paisSelect.value;
        const numeroWhatsapp = numeroWhatsappInput.value;

        // Verificación de longitud del número según el país seleccionado
        if (validarNumeroWhatsApp(paisCodigo, numeroWhatsapp)) {
            mensajeRegistro.style.display = 'block';
            mensajeRegistro.textContent = 'Registro exitoso. ¡Te contactaremos pronto!';
            // Aquí puedes agregar lógica para enviar el formulario a un servidor
        } else {
            mensajeRegistro.style.display = 'block';
            mensajeRegistro.textContent = 'Número de WhatsApp no válido. Por favor verifica e intenta de nuevo.';
        }
    });

    // Función para validar el número de WhatsApp
    function validarNumeroWhatsApp(codigoPais, numero) {
        // Longitudes esperadas según el país (números sin lada)
        const longitudesEsperadas = {
            "52": 10, // México
            "57": 10, // Colombia
            "51": 9,  // Perú
            "506": 8, // Costa Rica
            "593": 9, // Ecuador
            "507": 7, // Panamá
            "58": 10  // Venezuela
        };

        // Comparar la longitud del número ingresado
        const longitudEsperada = longitudesEsperadas[codigoPais];
        return numero.length === longitudEsperada;
    }
});
