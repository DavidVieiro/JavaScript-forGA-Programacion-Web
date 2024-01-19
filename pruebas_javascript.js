// cambiamos el texto dentro del elemento P con el ID parrafo_uno
function parrafoUno() {
    document.getElementById("parrafo_uno").innerHTML = "Hemos cambiado el parrafo uno!";
}
// cambiamos el texto dentro del elemento P con el ID cabecera_uno
function cabeceraUno() {
    document.getElementById("cabecera_uno").innerHTML = "Cambiamos la cabecera uno";
}
// definimos un numero y en la funcion recogemos el valor entra las etiquetas SPAN y le sumamos 1
// let numParrafoDos = 0;
function parrafoDos() {
    //    numParrafoDos = document.getElementById("parrafo_dos").innerHTML;
    //    numParrafoDos++;
    //    document.getElementById("parrafo_dos").innerHTML = numParrafoDos;
    // lo mismo que lo comentado pero en una sola linea
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
// eliminar el atributo STYLE de los elementos HTML
function clearAll() {
    // recorremos los hijos de BODY y eliminamos el atributo STYLE
    document.body.querySelectorAll("*").forEach(x => {
        x.removeAttribute("style");
    });
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
// creamos una funcion para generar un numero entero aleatorio dando un valor minimo y otro maximo
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
// creamos otra funcion para estrablecer un limite de numeros aleatorios generados
function limitRandomIntInterval(limit, min, max) {
    // definimos la variable como array vacio
    let numGenerados = [];
    if (max > min) {
        // creamos un bucle para generar una cantidad de numeros aleatorios hasta llegar al limite establecido
        for (let i = 0; i < limit; i++) {
            // cada numero que geramos lo insertamos al final del array
            // obligamos a que "min" y "max" sean numeros para evitar errores
            numGenerados.push(randomIntFromInterval(Number(min), Number(max)));
        }
        // mostramos el array en el parrafo con id "numGenerados" convertido a String
        document.getElementById("numGenerados").innerHTML = numGenerados.toString();
    } else {
        document.getElementById("numGenerados").innerHTML = "El valor del numero maximo no puede ser inferior al valor del numero minimo.";
        console.log(limit + " " + min + " " + max);
    }
}