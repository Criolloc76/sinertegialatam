function doPost(e) {
    var sheet = SpreadsheetApp.openById("1BwMWKJ9FltYEcRWs5_FOXU9deQfnesTHMZ9Alp8XmOI").getSheetByName("RegWEB");
    
    // Parsear datos JSON de la solicitud
    var data = JSON.parse(e.postData.contents);
    
    // Agregar los datos a la hoja
    sheet.appendRow([new Date(), data.name, data.country, data.email, data.phone]);
    
    // Crear la respuesta
    var jsonResponse = JSON.stringify({ "status": "success", "message": "¡Datos agregados exitosamente!" });
    
    // Establecer encabezados CORS
    var headers = {
        "Access-Control-Allow-Origin": "*", // Permitir cualquier origen
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS", // Permitir ciertos métodos HTTP
        "Access-Control-Allow-Headers": "Content-Type" // Permitir encabezados específicos
    };
    
    return ContentService.createTextOutput(jsonResponse)
                         .setMimeType(ContentService.MimeType.JSON)
                         .setHeaders(headers); // Agregar encabezados a la respuesta
}

function doOptions(e) {
    // Establecer encabezados CORS para la solicitud preflight
    var headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
    };
    
    return ContentService.createTextOutput()
                         .setMimeType(ContentService.MimeType.TEXT)
                         .setHeaders(headers);
}
