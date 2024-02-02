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
// creamos otra funcion para estrablecer un limite de numeros aleatorios generados y comprobacion de errores
function limitRandomIntInterval(limit, min, max) {
    let numGenerados = []; // definimos la variable como array vacio
    let errores = 0; // definimos la variable con la que comprobamos si hay errores en los campos de texto
    // definimos la variable con el elemento HTML ya que lo vamos a usar muchas veces
    const ELEMENTO_NUM_GENERADOS = document.getElementById("numGenerados");
    // limpiamos el contenido del elemento HTML con id numGenerados por si se vuelve a ejecutar la funcion
    ELEMENTO_NUM_GENERADOS.innerHTML = "";
    // establecemos el color del texto en rojo por si saltan errores
    ELEMENTO_NUM_GENERADOS.style.color = "red";

    // comprobamos que el valor del numero limite sea cero o inferior y devolvemos un error si ese es el caso
    if (limit <= 0) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero limite no puede ser 0 o inferior. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // comprobamos que el valor del numero minimo sea inferior a cero y devolvemos un error si ese es el caso
    if (min < 0) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero minimo no puede ser inferior a 0. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // comprobamos que el valor del numero maximo sea cero o inferior y devolvemos un error si ese es el caso
    if (max <= 0) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero maximo no puede ser 0 o inferior. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // comprobamos que el valor del numero maximo sea mayor que 10000 y devolvemos un error si ese es el caso
    if (max > 10000) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero maximo no puede superar 10000. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // comprobamos que el valor del numero minimo sea mayor que 10000 y devolvemos un error si ese es el caso
    if (min > 10000) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero minimo no puede superar 10000. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // comprobamos que el valor del numero limite sea mayor que 10000 y devolvemos un error si ese es el caso
    if (limit > 10000) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero limite no puede superar 10000. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // comprobamos que el valor del numero maximo sea menor que el minimo y devolvemos un error si ese es el caso
    if (max < min) {
        errores++;
        ELEMENTO_NUM_GENERADOS.append("El valor del numero maximo no puede ser inferior al valor del numero minimo. ");
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
    // si no hay errores ejecutamos el numero aleatorio
    if (errores == 0) {
        // sabemos que no hay errores asi que ponemos el color del texto por defecto
        ELEMENTO_NUM_GENERADOS.style.color = "";
        // creamos un bucle para generar una cantidad de numeros aleatorios hasta llegar al limite establecido
        for (let i = 0; i < limit; i++) {
            // cada numero que generamos lo insertamos al final del array
            // obligamos a que "min" y "max" sean numeros para evitar errores
            numGenerados.push(randomIntFromInterval(Number(min), Number(max)));
        }
        // mostramos el array en el parrafo con id "numGenerados" convertido a String
        ELEMENTO_NUM_GENERADOS.innerHTML = numGenerados;
        ELEMENTO_NUM_GENERADOS.append(document.createElement("br"));
    }
}
// funcion para limipiar el output de los numeros aleatorios generados
function limpiarOutputNumAleatorios() {
    // establecemos el valor del elemento HTML con el id numGenerados a vacio.
    document.getElementById("numGenerados").innerHTML = "";
}
