// SNACK 4: Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Inizializzazione casuale della lunghezza di due array

var firstArrayLength = Math.floor(Math.random() * 100);
var secondArrayLength = Math.floor(Math.random() * 100);

// Inizializzazione dei due array
var firstArray = [];
var secondArray = [];

//Riempio casualmente il primo array secondo la lunghezza ottenuta
for (var i = 0; i < firstArrayLength; i++) {
  var randome = Math.floor(Math.random() * 100);
  firstArray.push(randome);
}

//Riempio casualmente il secondo array secondo la lunghezza ottenuta
for (var i = 0; i < secondArrayLength; i++) {
  var randome = Math.floor(Math.random() * 100);
  secondArray.push(randome);
}

//Se il primo array è più corto del secondo gli aggiungo numeri casuali fino ad equilibrarli
if (firstArray.length < secondArray.length) {
  while (firstArray.length < secondArray.length) {
    var randome = Math.floor(Math.random() * 100);
    firstArray.push(randome);
  }
} 
//Se invece è il secondo array che è più corto del primo gli aggiungo numeri casuali fino ad equilibrarli
else if (firstArray.length > secondArray.length) {
  while (firstArray.length > secondArray.length) {
    var randome = Math.floor(Math.random() * 100);
    secondtArray.push(randome);
  }
}
