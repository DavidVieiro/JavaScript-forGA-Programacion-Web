
// cambiamos el texto dentro del elemento P con el ID parrafo_uno
function parrafoUno() {
    document.getElementById("parrafo_uno").innerHTML = "Hemos cambiado el parrafo uno!";
}
// cambiamos el texto dentro del elemento P con el ID cabecera_uno
function cabeceraUno() {
    document.getElementById("cabecera_uno").innerHTML = "Cambiamos la cabecera uno";
}
// definimos un numero y en la funcion recogemos el valor entra las etiquetas SPAN y le sumamos 1
let numParrafoDos = 0;
function parrafoDos() {
    //    numParrafoDos = document.getElementById("parrafo_dos").innerHTML;
    //    numParrafoDos++;
    //    document.getElementById("parrafo_dos").innerHTML = numParrafoDos;

    document.getElementById("parrafo_dos").innerHTML = Number(document.getElementById("parrafo_dos").innerHTML) + 1;
}
// creamos una funcion para borrar los campos del formulario
function limpiarForm() {
    document.getElementById("nombreForm").value = "";
    document.getElementById("apellidosForm").value = "";
}
// creamos una funcion para deshabilitar los estilos
function desStyle() {
    document.styleSheets[0].disabled = true;
    document.styleSheets[1].disabled = true;
}
// cremos una funcion para habilitar solo el estilo que pasamos como numero
function habStyle(n) {
    desStyle();
    document.styleSheets[n].disabled = false;
}
// poner fondo en transparente para limpiar el fondo de los elementos HTML
function clearAll2() {
    let lasP = document.getElementsByTagName("p");
    let losLI = document.getElementsByTagName("li");
    let losOL = document.getElementsByTagName("ol");
    // elementos P
    for (let i = 0; i < lasP.length; i++) {
        lasP[i].style.backgroundColor = "transparent";
    }
    // elementos LI
    for (let i = 0; i < losLI.length; i++) {
        losLI[i].style.backgroundColor = "transparent";
    }
    // elementos OL
    for (let i = 0; i < losOL.length; i++) {
        losOL[i].style.backgroundColor = "transparent";
    }
}
// eliminar el atributo STYLE de los elementos HTML
function clearAll() {
    let cuerpo = document.body;
    // recorremos los hijos de BODY y eliminamos el atributo STYLE
    for (let i = 0; i < cuerpo.children.length; i++) {
        cuerpo.querySelectorAll(cuerpo.children[i].nodeName).forEach(x => {
            x.removeAttribute("style");
        });
    }
}
// cambiamos el color de fondo de todos los P que hay en el documento HTML
function todasEtiP() {
    clearAll();
    let lasP = document.getElementsByTagName("p");
    // creamos un bucle y recorremos todos los elementos P
    for (let i = 0; i < lasP.length; i++) {
        lasP[i].style.backgroundColor = "aquamarine";
    }
}
// cambiamos el color de fondo de los P pares del documento HTML
function paresEtiP() {
    clearAll();
    let lasP = document.getElementsByTagName("p");
    // creamos un bucle para recorrer los elementos P
    // en un condicional comprobamos que el elemento sea par
    for (let i = 0; i < lasP.length; i++) {
        if (i % 2 === 0) {
            lasP[i].style.backgroundColor = "aquamarine";
        }
    }
}
// selecionar el segundo hijo del primer elemento OL
function primOLsegHijo() {
    clearAll();
    let buscarOLs = document.body.childNodes;
    let losOL = [];
    // buscamos entre todos los elementos HTML y metemos en un array los OL
    buscarOLs.forEach(x => {
        if (x.nodeName == "OL") {
            losOL.push(x);
        }
    });
    // nos centramos solo en el segundo LI dentro del primer OL
    losOL[0].getElementsByTagName("li")[1].style.backgroundColor = "aquamarine";

}