/* CONSEGNA: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
             L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
             Il computer genera un secondo numero casuale tra 1 e 5.
             Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari.
             Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3.
             In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari) */



// Definisco una funzione che genera un numero intero random compreso tra min e max
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Definisco una funzione per stabilire se un numero è pari oppure dispari
function isEven(number) {
    if (number % 2 ==0) {
        return true;
    } else {
        return false;
    }
}

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(6,4));
