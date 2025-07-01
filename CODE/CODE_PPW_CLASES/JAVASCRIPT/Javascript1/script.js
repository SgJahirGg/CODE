let title = document.getElementById('title');
console.log(title.innerHTML);

let items = document.getElementsByClassName
("item");
console.log(items[0].innerText);

for (let i of items) {
    console.log(i.innerText)
}

let paragraphs = document.getElementsByTagName
("p");
console.log(paragraphs[0].innerText);

let fistItem = document.querySelector(".item");
console.log(firstItem.innerText);

let allItems = document.querySelectorAll(".item");
allItems.forEach(item => console.log(item.innerText));

function change_title() {
    let title = document.getElementById("title");
    title.innerText = "DOM Manipulation Updated!"; 
}

//let title = document.getElementById("title");
//title.innerText = "DOM Manipulation Updated!"; 

let list = document.getElementById("list");
list.innerHTML += "<li class='item'> Item 4 </li>";

let title3 = document.getElementById("title");
title3.style.color = "blue"
title3.style.fontSize = "24px"

let indice = 4

function add_item(){
    let list = document.getElementById ("list");
    list.innerHTML += "<li class= 'item'>Item"
    +indice+ "</li>";
    indice++
}

function add_link() {
    let link =document.createElement("a");
    link.setAtribute("href", "https://www.example.com");
    link.innerText = "Visit Example";
    document.body.appendChild(link);
}

function create_p() { 
    let newParagraph = document.createElement("p");
    newParagraph.innerText = "This is a new paragraphs.";
    document.body.appendChild(newParagraph);
}

function remove_item() {
    let listItem = document.querySelector(".item");
    listItem.remove();
}

function remove_Items() {
    let listItems = document.querySelectorAll(".item");
    listItem.forEach(item => item.remove())
}

function replace_element() {
    let oldTitle = document.getElementById("title");
    let newTitle = document.createElement("h1");
    newTitle.innerText = "New JavaScript DOM Title";
    oldTitle.replaceWith(newTitle);
}




