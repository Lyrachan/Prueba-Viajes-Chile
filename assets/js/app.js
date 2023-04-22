// Activación del tooltip de Bootstrap en el archivo javascript local

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//

$(document).ready(function(){
    
    $("#enviarMensaje").click(function(){

        alert("¡Muchas gracias por ponerte en contacto con nosotros!"); /* Alerta de mensaje en sección de contacto*/

      })});