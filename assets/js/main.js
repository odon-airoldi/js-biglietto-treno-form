/* Descrizione:
Scrivere un programma che chieda all’utente:
- il numero di chilometri da percorrere
- età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica:
usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra.
La risposta finale (o output) sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo
un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile,
raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
*/



const formEl = document.getElementById('form');
const usernameEL = document.getElementById('user-name');
const kmrouteEl = document.getElementById('km-route');
const userageEl = document.getElementById('user-age');

const usernameOutput = document.querySelector('.user-name-output');
const kmrouteOutput = document.querySelector('.km-route-output');
const userageOutput = document.querySelector('.user-age-output');
const ticketpriceOutput = document.querySelector('.ticket-price-output');

formEl.addEventListener('submit', function(e){

    e.preventDefault()

    const usernameELvalue = usernameEL.value;
    const kmrouteElvalue = kmrouteEl.value;
    const userageElvalue = userageEl.value;
    const prezzoAlKm = 0.21;
    const prezzoTratta = kmrouteElvalue * prezzoAlKm;

    let prezzoBiglietto;

    if ( userageElvalue == 'Ragazzo') {
        prezzoBiglietto = prezzoTratta - prezzoTratta * 0.2
    } else if ( userageElvalue == 'Anziano') {
        prezzoBiglietto = prezzoTratta - prezzoTratta * 0.4
    } else if ( userageElvalue == 'Adulto') {
        prezzoBiglietto = prezzoTratta
    }

    // if ( userageElvalue < 18 ) {
    //     prezzoBiglietto = prezzoTratta - prezzoTratta * 0.2
    // } else if ( userageElvalue >= 65) {
    //     prezzoBiglietto = prezzoTratta - prezzoTratta * 0.4
    // } else {
    //     prezzoBiglietto = prezzoTratta
    // }

    usernameOutput.innerHTML = usernameELvalue;
    kmrouteOutput.innerHTML = kmrouteElvalue;
    userageOutput.innerHTML = userageElvalue;
    ticketpriceOutput.innerHTML = `${prezzoBiglietto.toFixed(2)} €`;

});









