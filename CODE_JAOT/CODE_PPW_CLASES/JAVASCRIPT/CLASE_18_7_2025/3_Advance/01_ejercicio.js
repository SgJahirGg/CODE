//JavaScript Puro/Nativo 

function herencia(prototipo_padre, prototipo_hijo) {
    let fn = function() {}
    fn.prototype = prototipo_padre.prototype
    prototipo_hijo.prototipo_hijo = new fn()
    

}


function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; 
}

//Creo atributos y luego accedo a la funcion 

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)

}        

function Deportista(nombre, apellido) {
    this.nombre = nombre
    this.apellido = apellido
}

let Deportista = new Persona('Jahir', 'Ortiz', '1.76')
Deportista.saludar()

let persona = new Persona('Jahir', 'Ortiz', '1.76')
persona.saludar()

//Prototype 
//Mecanismo fundamental de JavaScript que permite la herencia de propiedades y metodos entre objetos
//Cuando declasras funciones dentro de un objeto el prototype juega un papel importante

