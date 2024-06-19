console.log("probando javascript desde ejecutable externo")
// console.log("otra prueba")


// comentario en JS

/*

comentario
en
multiples
lineas

*/

// VARIABLES

// declaracion de variable => creando una caja/tupper
let caja1;

console.log(caja1)


// inicialización de variable => darle su primer valor
caja1 = "lasaña"


console.log(caja1)


// vaciamos el contenido anterior y le damos uno nuevo
caja1 = "ensalada"

console.log(caja1)


// let caja1; // no se permite crear con mismo nombre

// declaramos e inicializamos la variable
let caja2 = "pizza" 

console.log(caja2)

// asignamos el mismo valor de caja2 a caja1
caja1 = caja2


console.log(caja1, caja2)


// cosas que no podemos o no debemos hacer con variables

// let 1fruta; // no puede empezar con numeros
// let class; // no podemos usar palabras reservadas para crear variables. https://www.w3schools.com/js/js_reserved.asp

// let mifrutafavoritadelmundomundial; // no deberiamos escribir así
let miFrutaFavoritaDelMundoMundial; // :)



// let y const (ES6)

let myAge = 30;
console.log(myAge)

myAge = 25;
console.log(myAge)


const myYear = 2000;
console.log(myYear)

// myYear = 1980; // no puedes cambiar el valor de una constante

// var ES5-
// no debemos usar var, es muy antigua, crea problemas en el código.



// typeof => determinar el tipo de data de una variable en JS

let variable1 = true;
console.log(variable1, typeof variable1)

let variable2 = "patata";
console.log(variable2, typeof variable2)

let variable3 = ["hola", "adios"];
console.log(variable3, typeof variable3) // los arrays no son su propio tipo de data. son de tipo OBJECT

let variable4 = 50;
console.log(variable4, typeof variable4)

let variable5 = undefined;
console.log(variable5, typeof variable5)

let variable6 = null;
console.log(variable6, typeof variable6) // aunque dice object, null si es su propio de data null

let variable7 = NaN;
console.log(variable7, typeof variable7) // tipo de data es numero

let variable8 = { name: "bob" };
console.log(variable8, typeof variable8)



// STRINGS

let fruit1 = "fresa";
let fruit2 = "pera";
let fruit3 = "banana";

// + es un operador de concatenación
let recipe = "La receta del smoothie es: " + fruit1 + " y " + fruit2
console.log(recipe)

// interpolación de strings
let receta2 = `La receta del smoothie es: ${fruit1}, ${fruit2} y ${fruit3}`
console.log(receta2)



// indexación y analisis de los characteres

let simpleWord = "hola"
//                ||||
//                0123


// cantidad del letras
console.log(simpleWord.length) // 4

// notación de corchetes
console.log(simpleWord[0])


console.log(simpleWord[simpleWord.length -1])


// Metodos de strings (metodos son acciones especiales sobre tipos de data)


// quiero saber cual es la posición del caracter "o"

console.log( simpleWord.indexOf("la") ) 
// -1 significa que el caracter no existe dentro de la palabra

let longWord = "bananaramawakawakaehehsamiramira"

// quiero una sección de la palabra entre la posición 16 y 20

let slicedWord = longWord.slice(16, 20)
console.log( slicedWord )


console.log( slicedWord.toUpperCase() )


let username = "bob"
// como haria para capitalizar esta palabra => "Bob"

let primerChar = username[0].toUpperCase()
let restOfChars = username.slice(1)

console.log(primerChar + restOfChars)


// NUMBERS

let posNum = 20;
let negNum = -10;
let floatNum = 10.98479847
let inf = Infinity

console.log(posNum, negNum, floatNum, inf)

// console.log(0.2 + 0.1)

let num1 = 6;
let num2 = 2;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)

// el operador modulo no tiene nada que ver con porcentaje
console.log(num1 % num2) // 0

// 2 + 2 + 2 = 6 // restante es 0

console.log(7 % 2)

// 2 + 2 + 2 = 6 // restante 1

// si usamos % 2 y nos da 0, el numero es par. Si nos da 1, es impar



// suma y asignación


let age = 35;
age = age + 1;

console.log(age)

age += 1; // es exactamente igual a la linea 206
console.log(age)


age++; // es exactamente igual a la linea 206 y 210
console.log(age)


// Coercion (un cambio de data interno en JS)

console.log(3 + 5) // 8

console.log("3" + "5") // "35"

console.log("5" - "2") // 3. JS aplica coercion para tratar de ejecutar la operación. Convierte los strings a numeros.


console.log("javaScript" - "Script") // JS aplica coercion para tratar de ejecutar la operación. Convierte los strings a numeros. "javaScript" no lo puede convertir a numero => NaN => Not a Number


console.log(3 + "5") // primero intenta concatenar los strings "35"



// Objeto global => Math

console.log(Math)

console.log( Math.random() ) // 0 - 0.999999999999
console.log( Math.random() * 10 )  // 0 - 9.999999999999


console.log( Math.round(5.75) )


let maxNum = Math.min( 10, 50, 2, 30, 200 )
console.log(maxNum)


// BOOLEANOS

let posBool = true;
let negBool = false;

console.log(posBool, negBool)


// operador de negación (!)
console.log(!negBool)

let food1 = "pizza";
let food2 = "burger";
let food3 = "pizza";

//operadores de comparación === igual
//operadores de comparación !== diferente

console.log( food1 === food2 ) // false
console.log( food1 === food3 ) // true
console.log( food2 !== food3 ) // true

console.log(5 > 8) // false
console.log(5 < 8) // true
console.log(5 >= 5) // true


console.log("a" > "t") // false. compara por codigo ASCII 97 > 116
console.log("a" < "t") // true. compara por codigo ASCII 97 < 116


console.log("5" === "5") // true
console.log("5" === 5) // false. Compara tipo de data

// === comparador estricto. Compara tanto el valor como el tipo de data.

console.log( "5" == 8 ) // true

// == compador flexible. Crea el efecto de coercion en caso que los tipos de data sean diferentes.

// mayormente utilizar triple igual (===).
// PEEEERO entender que existe el otro (==) para casos muy especificos.


// Operadores logicos

console.log("manzana" === "pera" && "banana" === "banana") // false
//                    false      &&         true

// solo es true si ambas son true.
// si al menos unas es false, todo es false.

console.log("manzana" === "pera" || "banana" === "banana") // true
//                    false      &&         true 

// es true si al menos una es true.
// solo es false si todas son false.


console.log("****ACTIVIDAD****")

// Guess the console input for each console.log

// Part 1.

console.log(true && false && true); // false
console.log((11 % 3) === 2); // 3 + 3 + 3 true
console.log(false || !false); // true
console.log(false || (false && true)); // false
console.log(17 == '17');  // true
console.log((100 + 23) === '123'); // false
console.log('Hello' - 'llo'); // NaN

// Part 2.

let statement = 'i love javaScript!';


console.log(statement.indexOf("I")) // -1 (no la consigue)

let subStatement = statement.slice(7);
console.log(subStatement); // javaScript!

console.log(subStatement[0].toUpperCase()) // J

subStatement.toUpperCase(); // no estamos modificando el original. el valor se pierde
console.log(subStatement); // javaScript!


// los strings son inmutables. NO EXISTE NINGUN METODO que modifique un string


// CONDICIONALES

let oranges = -20;


// if ( oranges === 0 ) {
//   console.log("no tienes naranjas :(")
// }

// if (oranges > 0 && oranges <= 4) {
//   console.log("tienes naranjas para hacer un zumo")
// }

// if (oranges > 4) {
//   console.log("tienes naranjas para hacer zumo para TODOS! :D")
// }


// si todos los condicionales se refieren a la misma variable


if ( oranges === 0 ) {
  console.log("no tienes naranjas :(")
  // si esta condicion es la correcta, el sistema deja de revisar las siguientes
} else if (oranges > 0 && oranges <= 4) {
  console.log("tienes naranjas para hacer un zumo")
} else if (oranges > 4) {
  console.log("tienes naranjas para hacer zumo para TODOS! :D")
} else {
  // que pasa si el valor es algo raro (no concuerda con ninguna condicion anterior)
  console.log("algo pasó, valor no reconocido. Pruebe otro dia")
}


// valores thruthy y falsy


if (0 || "" || false || null || undefined || NaN) {
  // el numero 30 tiene un aspecto como verdadero (thruthy)
  console.log("esto se imprimirá?")
}

// falsy

// 0
// ""
// false
// null
// undefined
// NaN


let nombreDeUsuario = "Bob";

if (nombreDeUsuario) {
  console.log(`Hola ${nombreDeUsuario}`)
} else {
  console.log("Hola extraño! bienvenido")
}

