const URL_API = 'https://rickandmortyapi.com/api/character/'

function cargar_datos(URL, fn) {
    const xhttp = new XMLHttpRequest()

    xhttp.open('GET', URL_API + personaje_id, true)
    xhttp.onreadystatechange = function() {
        if (xhttp && xhttp.readyState == 4 && xhttp.status == 200) {
            let texto = JSON.parse(xhttp.responseText)
            crear_personaje(texto)
            fn(null, JSON.parse (xhttp.responseText))
        }else{
        const error = '[error]'
        fn (error, null)
        }
    }
    xhttp.send()
}

function crear_personaje(personaje) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.appendChild( document.createTextNode(personaje.name) )
    div.appendChild(h1)

    let image = document.createElement('img')
    image.src = personaje.image
    div.appendChild(image)

    let contenedor = document.getElementById('container')
    contenedor.appendChild(div)
}

for (let i=1; i<=100; i++) {
    cargar_datos(i)
//Con ese código es cuando se mandan todas las peticiones de golpe 
}

const invocacionSincrona = function (error, data) {

    //Este tipo de función de llama expresiva 
    if(error)
        return console.error (error)
    //Si existe un error se anula todo 

    console.log (data.info.count)
    cargar_datos(URL_API + data.results[0].id, function(error2, data2){ 
        if(error2)
            return console.error (error2)
        
        crear_personaje(data2)
        cargar_datos(URL_API + data.results[0].id, function(error3, data3){ 
            crear_personaje(data3)
    })
    })
}

cargar_datos(URL_API , invocacionSincrona);
