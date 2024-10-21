document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const data = new FormData(form); // Crea un objeto FormData con los datos del formulario

    // Envía los datos al script de Google Apps Script mediante fetch
    fetch('https://script.google.com/macros/s/AKfycbzWJ48_4j_yvuatbyYf_Rs5qy9DecuDvalCGAvaGnJqSWDdegZSfbUarF3Uhe9C1TgD4A/exec', {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      alert('Datos enviados correctamente');
      form.reset(); // Limpia el formulario después de enviar los datos
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos');
    });
  });
});
