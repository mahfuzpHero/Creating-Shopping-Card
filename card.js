// Select Items (Add)

function addItems(id) {
    var number = document.getElementById(id).value;
    var parseNumber = parseFloat(number);
    var total = parseNumber + 1;
    document.getElementById(id).value = total;
}

var addPhones = document.getElementById("add-phone");
addPhones.addEventListener("click", function () {
    addItems("numberOfPhone");
})

var addPhones = document.getElementById("add-case");
addPhones.addEventListener("click", function () {
    addItems("numberOfCase");
})


// Select Items (remove)
function removeItems(id) {
    var number = document.getElementById(id).value;
    var parseNumber = parseFloat(number);
    var total = parseNumber - 1;
    document.getElementById(id).value = total;
}

var addPhones = document.getElementById("remove-case");
addPhones.addEventListener("click", function () {
    removeItems("numberOfCase");
})

var addPhones = document.getElementById("remove-phone");
addPhones.addEventListener("click", function () {
    removeItems("numberOfPhone");
})

// Adding Item Price

var addPhone = document.getElementById("add-phone");
addPhone.addEventListener("click", function () {
    var Price = document.getElementById("p-price").innerText;
    var parseNumber = parseFloat(Price);
    var total = parseNumber + 1219;
    document.getElementById("p-price").innerText = total;
})

var addPhone = document.getElementById("add-case");
addPhone.addEventListener("click", function (){
    var Price = document.getElementById("c-price").innerText;
    var parseNumber = parseFloat(Price);
    var total = parseNumber + 59;
    document.getElementById("c-price").innerText = total;
})

// substract item Price

var addPhone = document.getElementById("remove-phone");
addPhone.addEventListener("click", function () {
    var Price = document.getElementById("p-price").innerText;
    var parseNumber = parseFloat(Price);
    var total = parseNumber - 1219;
    document.getElementById("p-price").innerText = total;
})

var addPhone = document.getElementById("remove-case");
addPhone.addEventListener("click", function (){
    var Price = document.getElementById("c-price").innerText;
    var parseNumber = parseFloat(Price);
    var total = parseNumber - 59;
    document.getElementById("c-price").innerText = total;
})
