//Tipos de funciones

//funcion declarativa
function print(valor) {
    console.log(valor);
}

print ('Hola mundo')

//Funcion expresiva
const suma = function(a,b){
    return (a + b)
}

var resultado = suma(10,20)
console.log(resultado)

//Funcion flecha
const suma2 = (a,b) => a+b
var resultado2 = suma2(100, 200)
console.log(resultado2)

//En la funcion flecha si se agregan mas valores, hay que declararlos de la siguiente manera 

const suma3 = (a, b) =>{
    resultado = a + b 
    console.log ('El resultado es ' + resultado);
}
suma3(20,20)

//Se colocan las llaves {} cuando se trata de mas lineas de codigo 


//Alcance de las variables 
var a= 'Hola mundo'
const b = 10
//Sale error porque b es constante, y no se pueden reasignar valores a constantes

function imprimir (){
    let temp = 'Luis'
    var temp2 = 'Juan'
    console.log(a)
    console.log(temp)
    console.log(temp2)
}

imprimir()
console.log(temp)
console.log(temp2)
console.log(b)


//alcance de las variables let, log, var

//En JavaScript, se puede agregar ; como no tambien
