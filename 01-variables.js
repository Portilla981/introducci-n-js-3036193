// alert("Hello word")
// -----------------------------------------
// CONVENCION NOMBRES PARA CODIFICAR
// =========================================

// UpperCamelCase   => En JS se usa para nombrar las clases
// lowerCamelCase   => En JS Se usa para nombrar las variables 
// SCREAMING_SNAKE_CASE => En JS Se usa para nombrar las constante 

// snake_case       => En JS generalmente no se usa esta converncion es muy usada en el lenguaje Python

// caja-de-kebac    => Se usa para nombrar las imagenes, los repositorios.
// Caja-De-Tren     =>

// Variables
// ya no se declara una variable con var
// En JS no es obligatorio terminar una sentencia deon (;)
// En JS no es obligatorio indicar el tipo de variable

var product = "sensor-1";

// No se puede iniciar una variable con - al medio
// var -sensor = "sensor-2";

// // No se puede iniciar una variable con numero
// var 1sensor = "sensor-3";

// // SI es permitido iniciar una variable con guien al piso
var _sensor = "sensor-4";

// Crear una variable con las tres formas 

var sensor = "Sensor de lluvia";
var sensor = "Sensor de temperatura";
var sensor = "Sensor de presion";

console.log(sensor)

// Al crear una variable con let esta es unica no se puede reescribir la constante 
let username = "Edwar";
// let username = "Patricia";

console.log(username)

// Ejemplo de const
// No puedo cambir el valor a una varibale constante
const maxSize = 1024
// maxSize = 123154

// Otro ejemplo con var
// console.log(userName2)
// var userName2 = "Jacobo"
let userName2 = "Jacobo"