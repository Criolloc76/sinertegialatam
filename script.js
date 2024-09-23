function copyToClipboard(button, text) {
    // Crear un elemento temporal para copiar el texto
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Añadir clase de animación para el destello visual
    button.classList.add('clicked');

    // Eliminar la clase después de la animación para permitir más clics
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 500);
}
