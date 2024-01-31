
function dado() {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function dadoCuatroCaras() {
    let dado6caras = dado();
    if (dado6caras < 5) {
        return console.log(dado6caras);
    }
    return dadoCuatroCaras();
}

for (let i = 0; i < 20; i++)  dadoCuatroCaras();


function AdivinaQueHago2() {
    return console.log((dado() + dado()) % 4 + 1);
}

for (let i = 1; i <= 20; i++) AdivinaQueHago2();

// detalles importantes de operadores
console.log("1" + 1);// => "11"
console.log("1" - 1);// => 0
console.log("2" * 2);// => 3
console.log("2" / 2);// => 1
console.log("hola" - 1); // => NaN
console.log("hola" * "adios"); // => NaN
console.log(2 + NaN); // => NaN
console.log(2 * NaN); // => NaN