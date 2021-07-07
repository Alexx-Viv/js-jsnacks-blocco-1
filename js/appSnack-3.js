// SNACK 3: Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.

// Elenco di variabili che possiamo inizializzare subito
var names = ["Luca", "Marco", "Paolo", "Giovanni", "Luigi", "Giacomo"];
var surnames = ["Rossi", "Bianchi", "Verdi", "Torre"];
var falseList = [];

//Fino a quanto il mio array di persone false non ne contine 3 continuo
while (falseList.length < 3) {
  //A generare casualemnte un coppia
  var couple =
    names[Math.floor(Math.random() * names.length)] +
    " " +
    surnames[Math.floor(Math.random() * surnames.length)];
  //Se questa coppia non è acnora presente nell mio array la aggiungo
  if (!falseList.includes(couple)) {
    falseList.push(" " + couple);
  }
}

alert(falseList);
