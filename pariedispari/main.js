/*  CONSEGNA: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
             L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
             Il computer genera un secondo numero casuale tra 1 e 5.
             Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari.
             Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3.
             In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)  */


// Fisso gli estremi del range entro il quale dovrebbero essere compresi i numeri dell'utente e del computer
var inf = 1;
var sup = 5;

do {
    // Chiedo all'utente di inserire un numero da 1 a 5
    var userNumber = parseInt(prompt('Inserisci un numero da ' + inf + ' a ' + sup));
    /*  Continuo a chiederglielo fintanto che l'input inserito
        o non è un numero,
        oppure è un numero, ma non è compreso tra 1 e 5  */
} while (isNaN(userNumber) || userNumber < inf || userNumber > sup);

do {
    // Chiedo all'utente di inserire "pari" o "dispari" (l'input viene direttamente trasformato in lower-case)
    var userChoice = prompt('Scegli tra pari e dispari').toLowerCase();
    //  Continuo a chiederglielo fintanto che l'input inserito non è nè "pari" nè "dispari"
} while (userChoice != 'pari' && userChoice != 'dispari');

// Simulo il gioco di pari e dispari tra l'utente e il computer invocando la funzione evenOddGame e passandole come argomenti i due input inseriti dall'utente
evenOddGame(inf, sup, userNumber, userChoice);



// ********** LE MIE FUNZIONI **********


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


// Definisco una funzione che prende in input due numeri e restituisce la loro somma
function sum(num1, num2) {
    return num1 + num2;
}


/*  Definisco una funzione per simulare il gioco di pari e dispari tra utente e computer.
    Questa funzione ha quattro parametri:
        - inf e sup, che indicano gli estremi (inferiore e superiore, rispettivamente) del range dal quale il computer deve "segliere" il numero;
        - number, che indica il numero inserito dall'utente (anche questo dovrebbe essere compreso tra inf e sup);
        - evenOrOdd, che dovrebbe essere o la stringa "pari" o la stringa "dispari" inserita dall'utente.  */
function evenOddGame(inf, sup, number, evenOrOdd) {
    // mostro in console le scelte dell'utente
    console.log('Utente: ' + number + ', ' + evenOrOdd);
    // genero un numero casuale compreso tra inf e sup che rappresenta il numero "scelto" dal computer
    var randomNumber = getRndInteger(inf, sup);
    // mostro in console il numero del computer
    console.log('Computer: ' + randomNumber);
    if (evenOrOdd == 'pari') {
        // se evenOrOdd è uguale a "pari", lo trasformo in un numero pari (per esmpio, 2)
        evenOrOdd = 2;
    } else {
        // se evenOrOdd è uguale a "dispari", lo trasformo in un numero dispari (per esmpio, 1)
        evenOrOdd = 1;
    }
    // calcolo la somma tra il numero dell'utente e quello del computer
    var totalSum = sum(number, randomNumber);
    if (isEven(evenOrOdd) == isEven(totalSum)) {
        // se la somma e ciò che ha inserito l'utente concordano (enbtrambi pari o entrambi dispari) ha vinto l'utente
        console.log('Ha vinto l\'utente');
    } else {
        // altrimenti ha vinto il computer
        console.log('Ha vinto il computer');
    }
}
