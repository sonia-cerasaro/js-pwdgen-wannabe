
var nome = prompt("Inserisci il tuo nome");

var cognome = prompt("Inserisci il tuo cognome");

var colore = prompt("Inserisci il tuo colore preferito");

var ordine = nome + cognome + colore;

console.log(ordine);

document.getElementById('password').innerHTML = ordine + "21";
