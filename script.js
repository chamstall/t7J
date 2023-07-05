// Exercice 1: 

let form = document.querySelector("form");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");

form.addEventListener("submit" , (e) =>{
    e.preventDefault();
    Action()
});

function Action (){
    input3.value = input1.value * input2.value;
    if(input1.value === "" || isNaN(input1.value) ){
        msg1.innerHTML = "veuillez saisir un nombre";
        input3.value = "";
    }
    if(input2.value === "" || isNaN(input2.value) ){
        msg2.innerHTML = "veuillez saisir un nombre";
        input3.value = "";
    }}

// Ecercice 2:


