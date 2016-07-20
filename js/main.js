//funcion mensajes chat

function valorInput() {
    var inputBox = document.getElementById("tarea");
    return inputBox.value;//captura el valor del input
}

function send() { //ENVIA MENSAJE
    var inputBoxValue = valorInput();
    if (inputBoxValue !== "") {
        boxConversa(inputBoxValue);
        clean();
    }
}
$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13') {
          send();
    }//AL HACER ENTER ENVIA MENSAJE
});

function boxConversa(bubbleText) { //CONSTRUCCION BURBUJA CONVERSACION

    var hora = new Date();
    var minuto = hora.getMinutes();
    var tiempo = hora.getHours();
    if(minuto<10){
        minuto = "0" + minuto
    }
    if(tiempo<10){
        tiempo = "0" + tiempo
    }
    if(tiempo<12){
        minuto += " A.M."
    }

    var conversa = document.getElementById("mensaje");
    var contenido = document.createElement("div");
    contenido.className = "msgs-news";//agregar a sass!
    contenido.innerHTML =  "<div>" + "<h5>" + bubbleText + "</h5>" + "<p>" + tiempo + ":" + minuto + "</p>" + "</div>";
    conversa.appendChild(contenido);
}
function clean() {
    var inputBox = document.getElementById("tarea");
    inputBox.value = "";
    inputBox.focus(); //LIMPIAR INPUT
}


//Buscar contacto

$(document).ready(function(){
    $('input#search').bind('keyup change', function () {
        if ($(this).val().trim().length !== 0) {
    
            $('#datos .contactos').show().hide().each(function () {
                if ($(this).is(':icontains(' + $('input#search').val() + ')'))
                    $(this).show();
            });
        }
        else {
            $('#datos .contactos').show().hide().each(function () {
                $(this).show();
            });
        }
    });

    $.expr[':'].icontains = function (obj, index, meta, stack) {
        return (obj.textContent || obj.innerText || jQuery(obj).text() || '').toLowerCase().indexOf(meta[3].toLowerCase()) >= 0;
    };
});




//Mostrar y ocultar emojis
$(document).ready(function(){
        
        $("#emoticon").on( "click", function() {
            $('#innerpicker').show(); 
         });
        
        $("#emoticon").on( "dblclick", function() {
            $('#innerpicker').hide(); 
         });

    });



















