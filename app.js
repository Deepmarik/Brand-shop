"use strict";
/* function go(elem) {
    let elem1 = document.getElementById("cartButton");
    elem1.data = "img/cart-2.svg"
}
function stoped(elem) {
    let elem1 = document.getElementById("cartButton");
    elem1.data = "img/cart.svg"

}
function down(elem) {
    let elem1 = document.getElementById("cartButton");
    elem1.data = "img/cart-3.svg"

}
let elem1 = document.getElementById("cartButton");
elem1.addEventListener("click", down);
elem1.addEventListener("mouseover", go);
elem1.addEventListener("mouseout", stoped); */


const eventSources = {
    click: 'img/cart-3.svg',
    mouseover: 'img/cart-2.svg',
    mouseout: 'img/cart.svg'
}

let cartButton = document.getElementById('cartButton');

for (let [event, source] of Object.entries(eventSources)) {
    cartButton.addEventListener(event, (element) => {
        element.target.src = source;
    });
}