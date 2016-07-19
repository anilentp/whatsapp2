//Funcion de busqueda
function findMember()
        {
            var dataarea = document.getElementById('datos');
            var search = document.getElementById('searchTerm').value.toLowerCase();
            var content="";
            var found=false;
            var compare="";
 
            // Recorremos todas las filas con contenido de la tabla
            for (var i = 1; i < dataarea.length; i++)
            {
                content = dataarea[i].getElementsByTagName('h5'); //La busqueda en solo nombres
                found = false;
                // Recorremos todas las celdas
                for (var j = 0; j < content.length && !found; j++)
                {
                    compare = content[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (search.length == 0 || (compare.indexOf(search) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    dataarea[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    dataarea[i].style.display = 'none';
                }
            }
        }


var foto = ["logocodeacademy.png", "raymi.jpg", 
"mariana.jpg", "anamaria.jpg", "rodulfo.jpg",
 "andrea.jpg", "mariapaula.jpg"];

var nombre = ["Laboratoria Perú", "Raymi Saldomando", 
"Mariana Costa", "Ana María Martinez", "Rodulfo Prieto", 
"Andrea Lamas", "María Paula Rivarola"];

// dar click y cambiar de imagen en el titular
$(".chat").click(function(){
    var data = $(this).attr("data");
    $(".mensaje-green").remove();
    // var imagen ="image/"+foto[data];
    $("#hablando").html('<img src="image/' + foto[data] + ' "class="img top">');
    $("#titulo").html("<b>" + nombre[data] + "</b>");
    escribirChat();
});
