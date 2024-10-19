/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    background-color: #f9f9f9; /* Color de fondo claro y suave */
    color: #333; /* Texto oscuro */
}

/* Estilo del encabezado */
header {
    background-color: #f44336; /* Un rojo más suave */
    color: white;
    padding: 2rem 0;
    text-align: center;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

/* Estilo de secciones */
section {
    background: white;
    margin: 2rem 0;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h2 {
    margin-bottom: 1rem;
    color: #444; /* Color de encabezados más suave */
}

/* Estilo de botones */
.btn {
    background: #f44336; /* Un rojo más suave */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.btn:hover {
    background: #d32f2f; /* Color de fondo del botón al pasar el mouse */
}

/* Estilo de formulario */
form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 0.5rem;
}

input[type="text"], select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 1rem;
}

/* Estilo del botón flotante */
#chat-flotante {
    position: fixed;
    bottom: 80px; /* Asegúrate de que no esté sobre el footer */
    right: 20px;
    background-color: #25D366; /* Color verde de WhatsApp */
    border-radius: 50%;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

#chat-flotante a {
    color: white;
    font-size: 24px;
}

/* Estilo del footer */
footer {
    text-align: center;
    padding: 1rem 0;
    background: #333;
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}
