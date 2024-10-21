document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que se recargue la página

    const formData = new FormData(form);

    fetch('https://script.google.com/macros/s/AKfycbzWJ48_4j_yvuatbyYf_Rs5qy9DecuDvalCGAvaGnJqSWDdegZSfbUarF3Uhe9C1TgD4A/exec', {
      method: 'POST',
      body: new URLSearchParams(formData) // Cambiar a URLSearchParams para asegurar que el formato sea correcto
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Datos enviados correctamente');
      form.reset(); // Limpia el formulario después de enviar los datos
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Hubo un error al enviar los datos');
    });
  });
});
