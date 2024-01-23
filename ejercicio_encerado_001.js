// ejercicio del encerado convertido a JavaScript
function AdQueHago(r, x) {
    if (x == 1) { // (x <= 1) cambiando solo un caracter
        console.log("R final = " + r);
        return r;
    }
    r = r * x;
    console.log("R = " + r);
    console.log("X = " + x);
    return AdQueHago(r, x - 1);
}
function main() {
    let x = 10; // input x;
    console.log(AdQueHago(1, x)); // print AdQueHago(1, x);
}
main();