var valores = [true, 5, false, "hola", "adios", 2];

var suma = valores[1] + valores[5];
var resta = valores[1] - valores[5];
var multiplicacion = valores[1] * valores[5];
var division = valores[1] / valores[5];
var modulo = valores[1] % valores[5];

var resultado1 = valores[0] || valores[2];
var resultado2 = valores[0] && valores[2];


console.log("Variables: " + valores[3] + " "+ valores[4])
if(valores[3].length > valores[4].length)
{
  console.log(valores[3] + " Es el mayor" );
}
else {
  console.log(valores[4] + " Es el mayor");
}

console.log("Resultado Boolean 1: " + resultado1);
console.log("Resultado Bollean 2: " + resultado2);


console.log("Variables: " + valores[1] + " " +valores[5])
console.log("Resultado de la Suma: " + suma);
console.log("Resultado de la Resta: " + resta);
console.log("Resultado de la Multiplicacion: " + multiplicacion);
console.log("Resultado de la Division: " + division);
console.log("Resultado del Modulo: " + modulo);
