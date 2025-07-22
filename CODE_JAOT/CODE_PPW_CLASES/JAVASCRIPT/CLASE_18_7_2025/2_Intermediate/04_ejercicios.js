var contactos = []

function contacto(nombre, apellido, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
}

//A nivel de JS hay una cuestion que se llama prototype, que es un objeto que se crea por 
//defecto cuando se crea una funcion

let objeto = new contacto("Jahir", "Ortiz", "jahirortiz29@gmail.com");

contactos.push(objeto) 

contactos.forEach( (data) => console.log(data) )
