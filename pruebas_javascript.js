
// cambiamos el texto dentro del elemento P con el ID parrafo_uno
function parrafoUno () {
    document.getElementById("parrafo_uno").innerHTML = "Hemos cambiado el parrafo uno!";
}
// cambiamos el texto dentro del elemento P con el ID cabecera_uno
function cabeceraUno() {
    document.getElementById("cabecera_uno").innerHTML = "Cambiamos la cabecera uno";
}
// definimos un numero y en la funcion recogemos el valor entra las etiquetas SPAN y le sumamos 1
let numParrafoDos = 0;
function parrafoDos() {
    numParrafoDos = document.getElementById("parrafo_dos").innerHTML;
    numParrafoDos ++;
    document.getElementById("parrafo_dos").innerHTML = numParrafoDos;
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