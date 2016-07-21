// search
<<<<<<< HEAD
/*function search($scope) {
=======
function AppCtl($scope) {
>>>>>>> f0132f135e62cd1501b01f7ac9b34ae005a4a2f9
    $scope.contacts = [
        {   nombre: 'Laboratoria Peru' ,
            lastMessage: 'Aldo: Dale dale!'
        },
        {   nombre: 'Raymi Saldomando' ,
            lastMessage: 'La clase va bien!'
        },
        {   nombre: 'Mariana Costa' ,
            lastMessage: 'El panel de speakers esta buenazo'
        },
        {   nombre: 'Ana Maria Martinez Franklin' ,
            lastMessage: 'Pues dale chamo!'
        },
        {   nombre: 'Rodulfo Prieto' ,
            lastMessage: '¿Cómo van las chicas?'
        },
        {   nombre: 'Andrea Lamas' ,
            lastMessage: 'Hoy me toca clases de canto yee!'
        },
        {   nombre: 'María Paula Rivarola' ,
            lastMessage: 'Wuju! esto me encanta!! en verdad!'
        },
        {   nombre: 'Katy Sanchez' ,
            lastMessage: 'No te preocupes, tengo el salón bajo control'
        },
        {   nombre: 'Aldo Alfaro' ,
            lastMessage: 'Van a comer?'
        }
    ];
<<<<<<< HEAD
}*/
 
 $('ul.listado li a').click(function() {
    var textoFiltro = $(this).text().toLowerCase().replace(/\s/g,"-");
    if(textoFiltro == 'todos')
    {
        $('div.filtros div.hidden').fadeIn('slow').removeClass('hidden');
    }
    else
    {
        $('.filtros div').each(function()
        {
            if(!$(this).hasClass(filterVal))
            {
                $(this).fadeOut('normal').addClass('hidden');
            }
            else
            {
                $(this).fadeIn('slow').removeClass('hidden');
            }
        });
    }
    return false;
    });
=======
}
 
>>>>>>> f0132f135e62cd1501b01f7ac9b34ae005a4a2f9
// search

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



















