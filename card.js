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

function parseSection(id) {
    var parseItem = document.getElementById(id).innerText;
    var afterParse = parseFloat(parseItem);
    return afterParse;
}
function addingAmount(id,number) {
    var parseItem = parseSection(id);
    var totalPrice = document.getElementById(id).innerText = parseItem + number;
}
var addPhone =  document.getElementById("add-phone");
addPhone.addEventListener("click", function () {
    addingAmount("p-price",1219);
    addingAmount("sub-total",1219);
    addingAmount("tax",1);
    addingAmount("total",1220);
})
var addPhone =  document.getElementById("add-case");
addPhone.addEventListener("click", function () {
    addingAmount("c-price",59);
    addingAmount("sub-total",59);
    addingAmount("tax",1);
    addingAmount("total",60);
})

// Substract Item Price

function substractAmount(id,number) {
    var parseItem = parseSection(id);
    var totalPrice = document.getElementById(id).innerText = parseItem - number;
}
var addPhone =  document.getElementById("remove-phone");
addPhone.addEventListener("click", function () {
    substractAmount("p-price",1219);
    substractAmount("sub-total",1219);
    substractAmount("tax",1);
    substractAmount("total",1220);
})
var addPhone =  document.getElementById("remove-case");
addPhone.addEventListener("click", function () {
    substractAmount("c-price",59);
    substractAmount("sub-total",59);
    substractAmount("tax",1);
    substractAmount("total",60);
})
document.getElementById("checkbtn").addEventListener("click", function () {
    const section1 = document.getElementById("sec1").style.display = "none";
    const section2 = document.getElementById("sec2").style.display = "block";
})
document.getElementById("positive").addEventListener("click", function () {
    const section2 = document.getElementById("sec2").style.display = "none";
    const section4 = document.getElementById("sec4").style.display = "block";
})
document.getElementById("negative").addEventListener("click", function () {
    const section2 = document.getElementById("sec2").style.display = "none";
    const section4 = document.getElementById("sec3").style.display = "block";
})