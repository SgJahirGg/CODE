const express = requite('express');

var app = express();

//para brindar servicio
app.use('/', function(req, res) {
    res.send('Hola Mundo');
});

let puerto = 3000;
app.listen(puerto)
console.log(`Web App is listen on http://localhost:${puerto}/`)

