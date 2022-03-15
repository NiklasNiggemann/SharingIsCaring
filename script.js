// addPerson, Calculate Price etc.

const personCount = document.getElementById('personCount');
const gamePrice = document.getElementById('price');
const pricePerPerson = document.getElementById('pricePerPerson');

var price = Number(gamePrice.innerHTML);
var person = Number(personCount.innerHTML);
var pricePP = Number(pricePerPerson.innerHTML);

pricePerPerson.innerHTML = price;

function addPerson() {
    if (person < 5) {
        person += 1;
        personCount.innerHTML = person;
    }
    pricePP = price / person;
    if (pricePP % 1 !== 0) {
        pricePP = pricePP.toFixed(2);
    }
    pricePerPerson.innerHTML = pricePP;

}

function delPerson() {
    if (person > 1) {
        person -= 1;
        personCount.innerHTML = person;
    }
    pricePP = price / person;
    if (pricePP % 1 !== 0) {
        pricePP = pricePP.toFixed(2);
    }
    pricePerPerson.innerHTML = pricePP;
}

function addRow() {

}

// New Entry