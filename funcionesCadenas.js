/**
  El metodo length calcula la longitud de un texto
  (el número de caracteres que lo forman).
**/

var mensaje = "Hola Mundo";
var numeroLetras = mensaje.length;

console.log("Cantidad de Letras: ".concat(numeroLetras));


/**
  toUpperCase; transforma todos los caracteres a sus correspondientes caracteres en mayúsculas.
**/
var hola = "Hola";
var mayuscula = hola.toUpperCase();

console.log("Mensaje de Minúsculas a Mayúsculas: ".concat(mayuscula));

/**
  toLowerCase; transforma todos los caracteres a sus correspondientes caracteres en minúsculas.
**/
var adios = "ADIOS";
var minuscula = adios.toLowerCase();

console.log("Mensaje de Mayúsculas a Minúsculas: ".concat(minuscula));


/**
  chartAt(position) --> obtiene el caracter que se encuentra en la posición indicada.
**/
var letra = hola.charAt(2);

console.log("'Hola' la letra que se encuentra en la posición 2 es: ".concat(letra));

/**
  indexOf(caracter) --> calcula la posición en la que se encuentra el carácter indicado dentro de la cadena
  de texto, si el carácter se incluye varias veces dentro de la cadena de texto, se devulve su primera
  posición empezando a buscar desde la izquierda. Si la cadena no contiene el carácter, la función
  devulve el valor -1.
**/
var posicion = hola.indexOf('a');
var posicion2 = hola.indexOf('z');

console.log("Posición de la letra 'a': ".concat(posicion));
console.log("Cuando no se encuentra la letra 'z': ".concat(posicion2));

/**
  lastIndexof(caracter) --> calcula la última posición en la que se encuentra el carácter indicado dentro
  de la cadena de texto. Si la cadena no contiene el carácter, la función devuelve el valor -1.

  Comienza su busqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la
  correcta empezando a contar desde el principio de la palabra.
**/
var posicion3 = hola.lastIndexOf('a');
var posicion4 = hola.lastIndexOf('y');

console.log("Posción de la letra 'a': ".concat(posicion3));
console.log("Cuando no se encuenta la letra 'y' en la cadena: ".concat(posicion4));

/**
  substring(inicio, final) --> extrae una porcion de una cadena de texto, el segundo parametro es opcional.
  Si solo se indica el parámetro inicio, la función devuelve la parte de la cadena original
  corrspondiente desde esa posición hasta el final.

  Si se indica un inicio negativo, se devulve la cadena original.

  Cuando se indica el inicio y el final, se devuelve la parte de la cadena original contenida comprendida
  entre la posicion inicial y la inmediatamente anterior a la posición final (es decir, la posición
  inicio está incluida y la posición final no).

  Si se indica un final más pequeño que el inicio, javaScript los considera e forma inversa, ya que atoma-
  ticamente asigna el valor más pequeño al inicio y el más grande al final.
**/
// 0123456789
// Hola Mundo
var mensaje2 = "Hola Mundo";
var porcion = mensaje2.substring(2);
var porcion1 = mensaje2.substring(5);
var porcion2 = mensaje2.substring(7);
var porcion3 = mensaje2.substring(-2);
var porcion4 = mensaje2.substring(1, 8);
var porcion5 = mensaje2.substring(3, 4);
var porcion6 = mensaje2.substring(5, 0);
var porcion7 = mensaje2.substring(0, 5);

console.log("0123456789");
console.log("Hola Mundo: ");
console.log("Hola Mundo -> substring(2): ".concat(porcion));
console.log("Hola Mundo -> substring(5): ".concat(porcion1));
console.log("Hola Mundo -> substring(7): ".concat(porcion2));
console.log("Hola Mundo -> substring(-2): ".concat(porcion3));
console.log("Hola Mundo -> substring(1, 8): ".concat(porcion4));
console.log("Hola Mundo -> substring(3, 4): ".concat(porcion5));
console.log("Hola Mundo -> substring(5, 0): ".concat(porcion6));
console.log("Hola Mundo -> substring(0, 5): ".concat(porcion7));


/**
  split(separator) --> convierte una cadena de texto en un array de cadenas de texto, La función parte la
  cadena e texto determinado sus trozos a partir del caracter 'separator' indicado.

  Con esta funcion se pueden extraer facílmente las letras que forman una palabra
**/
var mensaje3 = "Hola Mundo, soy un mensaje de texto";
var palabras = mensaje3.split(" ");
var letras2 = hola.split("");

console.log("split: ".concat(palabras));
console.log("split de hola: ".concat(letras2));
