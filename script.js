document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    fetch("https://script.google.com/macros/s/AKfycbzWJ48_4j_yvuatbyYf_Rs5qy9DecuDvalCGAvaGnJqSWDdegZSfbUarF3Uhe9C1TgD4A/exec", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        this.reset(); // Limpia el formulario después de enviar
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
