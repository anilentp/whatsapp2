
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






//Mostrar y ocultar emojis
$(document).ready(function(){
        
        $("#emoticon").on( "click", function() {
            $('#innerpicker').show(); 
         });
        
        $("#emoticon").on( "dblclick", function() {
            $('#innerpicker').hide(); 
         });

    });





var foto = ["logocodeacademy.png", "raymi.jpg", 
"mariana.jpg", "anamaria.jpg", "rodulfo.jpg",
 "andrea.jpg", "mariapaula.jpg"];

var nombre = ["Laboratoria Perú", "Raymi Saldomando", 
"Mariana Costa", "Ana María Martinez", "Rodulfo Prieto", 
"Andrea Lamas", "María Paula Rivarola"];

// dar click y cambiar de imagen en el titular
$(".chat").click(function(){
    var data = $(this).attr("data");

    $(".panelmsg").removeClass("visible");
    $("#msg-group-"+data).addClass("visible");
    var imagen ="image/"+foto[data];
    $(".contact").attr('src', imagen);
    $(".media-body h4").text(nombre[data]);
    
});










