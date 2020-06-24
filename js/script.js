
var listaCognomi = ["Rossi", "Magenta", "Verdi", "Rosa", "Bianchi", "Marroni"];

console.log(listaCognomi);

var btn = document.getElementById("verifica");

btn.addEventListener("click", function () {

  var lista = document.getElementById('lista');

  var cognomeUtente = document.getElementById('cognome').value;

  listaCognomi.push(cognomeUtente);

  console.log(listaCognomi);

  listaCognomi = listaCognomi.sort();

  console.log(listaCognomi);

  var j = "a";

  for (var i = 0; i < listaCognomi.length; i++) {

    if (j > cognomeUtente && isNaN(cognomeUtente) && cognomeUtente != "") {

      lista.innerHTML += "<li>" + listaCognomi[i] +"</li>";

      console.log(listaCognomi[i]);

    } else {

      document.getElementById("avviso").innerHTML = "Attenzione il Cognome inserito non è corretto. Verificare anche che la prima lettera sia maiuscola.";

    }

  }

});
