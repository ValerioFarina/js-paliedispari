/* CONSEGNA: scrivere una funzione per valutare se una parola è palindroma oppure no
(una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no) */


/* Dichiaro una funzione isPalindrome per valutare se una parola è palindroma oppure no.
   Questa funzione ha un solo parametro formale.
   Per utilizzarla correttamente, occorre passargli come parametro effettivo una stringa */
function isPalindrome(word) {
    // "Divido" la stringa word in una parte sx (leftHalf) e una parte dx (rightHalf)
    var leftHalf = word.slice(0, Math.floor(word.length / 2));
    var rightHalf = word.slice(Math.ceil(word.length / 2), word.length);
    // Creo un ciclo for che effettua un numero di iterazioni pari alla lunghezza della parte sx (che è sempre uguale alla lunghezza della parte dx)
    for (var i=0; i<leftHalf.length; i++) {
        /* Scorro contemporaneamente la parte sx e quella dx:
            - la parte sx la scorro da sx a dx (la posizione corrente è in questo caso data da leftPosition)
            - la parte dx la scorro da dx a sx (la posizione corrente è in questo caso data da rightPosition) */
        leftPosition = i;
        rightPosition = word.length - 1 - i;
        // Confronto carattere per carattere la parte sx e quella dx (si ricordi però che le due parti vanno lette in sensi opposti)
        if (word[leftPosition] != word[rightPosition]) {
            // Non appena la parte sx e quella dx (lette in due sensi opposti) differiscono di un carattere, ritorno false ed esco dalla funzione
            return false;
        }
    }
    /* Se il ciclo for esegue tutte le possibili iterazioni senza mai entrare nell'istruzione condizionale, allora significa che la parte dx
       non è altro che la parte sx letta al contrario, e quindi la stringa word è palindroma */
    return true;
}

console.log('\'anna\' è palindromo? ' + isPalindrome('anna'));
console.log('\'ingegni\' è palindromo? ' + isPalindrome('ingegni'));
console.log('\'andrea\' è palindromo? ' + isPalindrome('andrea'));
console.log('\'mamma\' è palindromo? ' + isPalindrome('mamma'));
