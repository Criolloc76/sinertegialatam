document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const formData = new FormData();
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('pais', document.getElementById('country-select').value);
    formData.append('email', document.getElementById('email').value);
    formData.append('telefono', document.getElementById('telefono').value);

    // Asegúrate de haber reemplazado la URL de Apps Script correcta aquí
    fetch('TU_URL_DE_APPS_SCRIPT', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert("Registro exitoso.");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Ocurrió un error al registrar los datos.");
    });
});
