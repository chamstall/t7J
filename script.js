// Exercice 1: 

// let form = document.querySelector("form");
// let input1 = document.querySelector("#input1");
// let input2 = document.querySelector("#input2");
// let input3 = document.querySelector("#input3");
// let msg1 = document.querySelector("#msg1");
// let msg2 = document.querySelector("#msg2");

// form.addEventListener("submit" , (e) =>{
//     e.preventDefault();
//     Action()
// });

// function Action (){
//     input3.value = input1.value * input2.value;
//     if(input1.value === "" || isNaN(input1.value) ){
//         msg1.innerHTML = "veuillez saisir un nombre";
//         input3.value = "";
//     }
//     if(input2.value === "" || isNaN(input2.value) ){
//         msg2.innerHTML = "veuillez saisir un nombre";
//         input3.value = "";
//     }}

// Ecercice 2:

alert(" RAPPEL : Un entier est un nombre sans partie décimale ou avec une partie décimale nulle (pas une fraction), qui peut être positif, négatif ou égal à zéro. Par exemple : -13, -5,0, 1, 5, 8, 97, 3 043 etc. ")
let saisiOfUser;
do{
    saisiOfUser = prompt("Saisissez un nombre n entier pour calculer le reste de sa division par 4")
}while( saisiOfUser % 1 !== 0 );

let card = document.querySelector(".card");
if(saisiOfUser === ""){
    alert("Vous n'avez rien saisis !");
    card.remove();
}
else if(saisiOfUser === null){
    alert("N'hesitez pas à utiliser notre calculatrice de reste de division par 4 !");
    card.remove();
}
else{
    card.innerHTML =` Si l'on divise ${saisiOfUser} par 4 , le reste est de ${saisiOfUser % 4} `
}





