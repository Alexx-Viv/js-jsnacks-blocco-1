// SNACK 2: Chiedi un numero all'utente, se è pari stampa il numero,
// se è dispari stampa il numero successivo.

// Elenco di variabili che possiamo inizializzare subito
var number;

//Prima di tutto chiedo un numero all'utente e contiuno a chiederglielo se mi da qualcosa di diverso
do {
  number = parseInt(prompt("Inserire un numero"));
} while (!number && isNaN(number));

//Con if capisco se il numero è pari o dispari grazie al resto del modulo
if (number % 2 == 0) {
  alert(number);
} else if (number % 2 == 1) {
  alert(number + 1);
}

console.log(number);
