// SNACK 1 : Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Elenco di variabili che possiamo inizializzare subito

var sum = 0;
var utility;

// Chiedere i numeri tramite il for più somma

for (var i = 0; i < 5; i++) {
  // Chiedere il numero all'utente e continuo a richiederglielo
  utility = parseInt(prompt("Inserire un numero"));
  // Se me lo da lo aggiungo a somma
  if (!isNaN(utility)) {
    sum += utility;
  } 
  // Se no tolgo una cifra fal contatore i fino a quando non ricevo un numero
  else {
    i--;
  }
}

// Chiedere i numeri tramite il while più somma
// var i = 0;

// while(i < 5){
// Chiedere il numero all'utente e continuo a richiederglielo
//     utility=parseInt(prompt("Inserire un numero"))
// Fino a quando mi da un numero
//     if(!isNaN(utility)){
//         sum += utility;
//         i++;
//     }
// }

alert(sum);
