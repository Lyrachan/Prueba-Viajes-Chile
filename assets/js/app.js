// Activación del tooltip de Bootstrap en el archivo javascript local

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

//

$(document).ready(function(){       /*Uso de JQuery como framework para el trabajo con Javascript*/ 
    
    $("#enviarMensaje").click(function(){

        alert("¡Muchas gracias por ponerte en contacto con nosotros!"); /* Alerta de mensaje en sección de contacto*/


        $().on('click', function(event) {
            if (this.hash !== "") {             /** Implementación de la función smooth-scroll. Funciona para los elementos del navbar y para el logo del footer */
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 100, function(){
            window.location.hash = hash;
            });
            }
            });

      })});