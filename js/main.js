//Funcion de busqueda
function doSearch()
        {
            var tableReg = document.getElementById('datos');
            var searchText = document.getElementById('searchTerm').value.toLowerCase();
            var cellsOfRow="";
            var found=false;
            var compareWith="";
 
            // Recorremos todas las filas con contenido de la tabla
            for (var i = 1; i < tableReg.rows.length; i++)
            {
                cellsOfRow = tableReg.rows[i].getElementsByTagName('b'); //La busqueda en solo nombres
                found = false;
                // Recorremos todas las celdas
                for (var j = 0; j < cellsOfRow.length && !found; j++)
                {
                    compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1))
                    {
                        found = true;
                    }
                }
                if(found)
                {
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
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
