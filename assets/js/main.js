const nameEl = document.getElementById('name');

const buttonEl = document.querySelector('button');

const formEl = document.querySelector('form');


buttonEl.addEventListener('click', function() {
    console.log(nameEl.value);
})

formEl.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log(nameEl.value);
    
}
)


console.log(nameEl, nameEl.value)




/*

Il programma dovrà chiedere all'utente
- il numero di chilometri che vuole percorrere
- e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65
- L'output del prezzo finale va messo fuori in forma umana
    (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

TIP:
per controllare che la vostra logica sui prezzi funzioni correttamente, provate a verificare quanto segue:
100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

*/


const prezzoAlKm = 0.21;
const distanza = Number(prompt('Quanti KM devi percorrere?'));
const eta = prompt('Quanti anni hai?');
const prezzoTratta = distanza * prezzoAlKm
let prezzoBiglietto;

if ( eta < 18 ) {

    prezzoBiglietto = prezzoTratta - prezzoTratta * 0.2

} else if ( eta >= 65) {

    prezzoBiglietto = prezzoTratta - prezzoTratta * 0.4

} else {

    prezzoBiglietto = prezzoTratta

}

console.log(`Totale ${prezzoBiglietto.toFixed(2)}€`);