// creo l'array con i cognomi

var listaCognomi = ["Rossi", "Magenta", "Verdi", "Rosa", "Bianchi", "Marroni"];

console.log(listaCognomi);

// al click del bottone

var btn = document.getElementById("verifica");

btn.addEventListener("click", function () {

  var lista = document.getElementById('lista');

  var avviso = document.getElementById("avviso");

  // "pulisco" la lista cognomi e l'avviso dell'errore nell html

  lista.innerHTML = "";

  // prendo il valore inserito dall'cognomeUtente

  var cognomeUtente = document.getElementById('cognome').value;

  var j = "a";

  // pongo delle condizioni affinchè il dato inserito dall'utente non sia corretto

  if (j > cognomeUtente && isNaN(cognomeUtente) && cognomeUtente != "") {

    // aggiungo nell'array creato in precedenza il cognome dell'utente

    listaCognomi.push(cognomeUtente);

    console.log(listaCognomi);

    //dispongo l'array in ordine alfabetico

    listaCognomi = listaCognomi.sort();

    console.log(listaCognomi);

    for (var i = 0; i < listaCognomi.length; i++) {

      // stampo i valori dell'array nell html

      lista.innerHTML += "<li>" + listaCognomi[i] +"</li>";

      console.log(listaCognomi[i]);

      // determino la posizione nella lista del cognome inserito dall'utente

      if (cognomeUtente == listaCognomi[i]) {

        document.getElementById("avviso").innerHTML = "Il cognome inserito si trova nella posizione: " + (i+1);

      }

    }

  } else {

    // se i dati inseriti dall'utente non sono corretti

    avviso.innerHTML = "Attenzione il Cognome inserito non è corretto. Verificare anche che la prima lettera sia maiuscola.";

  }

});
