body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #FF0000; /* Rojo */
    color: white;
    padding: 10px 0;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 20px;
}

main {
    padding: 20px;
}

footer {
    text-align: center;
    padding: 10px 0;
    background-color: #FF0000; /* Rojo */
    color: white;
    position: relative;
    bottom: 0;
    width: 100%;
}

#chatbot-button {
    position: fixed;
    bottom: 60px; /* Asegúrate de que no esté sobre el footer */
    right: 20px;
    background-color: #25D366; /* Verde de WhatsApp */
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 100; /* Asegura que esté por encima de otros elementos */
}

#chatbot-modal {
    position: fixed;
    bottom: 100px; /* Asegúrate de que no esté sobre el footer */
    right: 20px;
    width: 300px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

#close-chat {
    cursor: pointer;
    float: right;
}

#chat-message {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    max-height: 150px;
    overflow-y: auto;
}

/* Responsividad */
@media (max-width: 600px) {
    nav ul li {
        display: block; /* Cambiar a bloque para móvil */
        margin: 10px 0;
    }

    #chatbot-button {
        width: 45px;
        height: 45px;
    }

    #chatbot-modal {
        width: 90%; /* Ancho más adecuado para móviles */
        left: 5%;
    }

    main {
        padding: 10px;
    }
}

form {
    display: flex;
    flex-direction: column;
}

form label, form select, form input, form button {
    margin: 10px 0;
}

form select {
    padding: 10px;
    font-size: 16px;
}
