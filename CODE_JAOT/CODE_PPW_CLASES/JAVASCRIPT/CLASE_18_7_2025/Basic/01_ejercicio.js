//Tipos de datos //

//entero - number/
var a = 100
console.log(a)
console.log(typeof a)
//cadena de caracteres - string //
var b ='Hola mundo'
console.log(b)
console.log(typeof b)
//booleano - boolean//
var c = true
console.log(c)
console.log(typeof c)

var persona = {
    nombre: 'Juana',
    apellido: 'Zamora',
    ciudad: 'Guayaquil',
}

console.log(typeof persona)
console.log(persona.nombre)

//comparaciones//
console.log(1 == 1) //true 
console.log(1 == '1') //true, porque compara el valor (== compara valor)
console.log(1 === '1') //false, porque compara el valor y el tipo de dato (=== compara valor y tipo de dato)
console.log(1 == true) //true, porque 1 es considerado verdadero en JavaScript
console.log(1 === true) //false, porque 1 es un número y true es un booleano

//Tipos de funciones



//Alcance de las variables 
var a= 'Hola mundo'