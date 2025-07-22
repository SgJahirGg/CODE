function hablar() {
setTimeout(function() {
        console.log(`bla bla bla....`)
    }, 2000);
    }


function saludar(nombre, fn) {
    setTimeout(function() {
        console.log(`Hola ${nombre}`)
        fn( ) 
        hablar()
        hablar()
        hablar()
        adios(nombre)
    }, 2000)
}

function adios(nombre) {
    setTimeout(function() {
    console.log(`Adios ${nombre}`)
    console.log(`Finalizando conversacion`)

    }, 2000);
}


console.log('Iniciando conversacion')
saludar('Jahir')
console.log('Finalizando conversacion')