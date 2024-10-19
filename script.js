function validarNumeroWhatsApp(codigoPais, numero) {
    const longitudesEsperadas = {
        "52": 10, // México (sin el 1)
        "57": 10, // Colombia
        "51": 9,  // Perú
        "506": 8, // Costa Rica
        "593": 9, // Ecuador
        "507": 7, // Panamá
        "58": 10  // Venezuela
    };

    // Comparar la longitud del número ingresado
    const longitudEsperada = longitudesEsperadas[codigoPais];

    // Caso especial para México, donde se espera +521 seguido de 10 dígitos
    if (codigoPais === "52" && numero.length === 10) {
        return true; // El número es válido
    }

    return numero.length === longitudEsperada;
}
