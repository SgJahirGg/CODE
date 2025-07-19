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
console.log(0 == null)
console.log(0 === null)
console.log(0 == undefined)
console.log(0 === undefined)

console.log( undefined == null) //true, porque undefined y null son considerados iguales en JavaScript, no son nada 
console.log( undefined === null) //false, porque undefined y null son de tipos diferentes

console.log (false == null) //true, porque false es considerado igual a null en JavaScript
console.log (null)
console.log ( !null) //falso
console.log (!!null) //false, porque !! convierte null a booleano, y null es considerado falso en JavaScript

console.log (undefined)
console.log (!undefined)
console.log (!!undefined) 

var obj1 = {nombre: 'Jahir'}
var obj2 = {nombre: 'Jahir'}

console.log(obj1 == obj2) //falso, porque son dos objetos diferentes en memoria
//aunque tengan valores iguales en atributos, siguen siendo diferentes objetos 

console.log(obj1.nombre == obj2.nombre) //true, porque compara el valor de los atributos nombre de ambos objetos

var obj3 = obj1 //En este caso se esta realizando una asginacion por referencia, por lo que obj3 y obj1 apuntan al mismo objeto en memoria

//Como diferenciar entre una asignacion por valor y una asignacion por referencia 

//referencia
var obj3 = obj2
console.log(obj2 == obj3) 

//valor
var obj4 = {
    nombre: obj2. nombre
}

console.log(obj2 == obj4)

