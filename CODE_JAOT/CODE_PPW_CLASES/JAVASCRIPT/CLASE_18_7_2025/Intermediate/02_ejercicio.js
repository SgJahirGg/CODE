let smarties = ["Plato", "Lao Tzu", "St.Augustine", "Ibn Arabi", "Max Planck", "David Bohm"];

let arreglo = Iterator.from(smarties).map(x=> x.leght).toArray(); // [5,7,13,9,10,10]
arreglo.forEach(element => {
    console.log(element);
});

arreglo = Iterator.from(smarties).map(x=> x.length).filter(x => x > 10).toArray(); // [5,7,9]
arreglo.forEach(element => {
    console.log(element);
});

arreglo = Iterator.from(smarties).map(x=> x.length).toArray(); // [5,7,13,9,10,10]
arreglo.forEach(element => {
    console.log(element);
});

//Funcion generadora 
function* getSmartiesNames() {
    yield "Plato";
    yield "Lao Tzu";   
    yield "St.Augustine";
    yield "Ibn Arabi";
    yield "Max Planck";
    yield "David Bohm";
}

const smarties_ = getSmartiesNames();

Iterator.from(getSmartiesNames())
    .map(name => name.lenght)
    .filter(length => length < 10)
    .take(2)
    .toArray();
arreglo.forEach(element => console.log(element));

//Conjuntos 

let set= new Set(["A", "B", "C"]);
let set2 = new Set(["C", "D", "E"]);

let set3 = set.intersection(set2); // Set { "C" }
