/*  CONSEGNA: scrivere una funzione per valutare se una parola è palindroma oppure no
             (una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)  */


/*  Dichiaro una funzione isPalindrome per valutare se una parola è palindroma oppure no.
    Questa funzione ha un solo parametro formale.
    Per utilizzarla correttamente, occorre passarle come parametro effettivo una stringa  */
function isPalindrome(word) {
    /*  Salvo nella variabile middle un valore che rappresenta idealmente il centro della stringa word:
        - se word.length è dispari, middle è esattamente il centro della stringa;
        - se word.length è pari, la stringa può essere divisa in due parti di uguale lunghezza, una di sx e una di dx,
          e in tal caso middle indicherà il punto in cui inizia la parte di dx  */
    var middle = Math.floor(word.length / 2);
    for (var i=0; i<middle; i++) {
    /*  - Confronto il primo carattere di word (cioè, word[0]) con l'ultimo (cioè, word[word.length - 1 - 0]).
          Se sono diversi, ritorno falso e esco dalla funzione.
        - Confronto il secondo carattere di word (cioè, word[1]) con il penultimo (cioè, word[word.length - 1 - 1]).
          Se sono diversi, ritorno falso e esco dalla funzione.
        - Confronto il terzo carattere di word (cioè, word[2]) con il terzultimo (cioè, word[word.length - 1 - 2]).
          Se sono diversi, ritorno falso e esco dalla funzione.
          etc......  */
        if (word[i] != word[word.length - 1 - i]) {
            return false;
        }
    }
    // Se il ciclo for esegue tutte le possibili iterazioni senza mai eseguire l'istruzione condizionale, allora significa che la parola è palindroma
    return true;
}


// ********** TESTS **********
var word = 'anna';
console.log('Is ' + '\'' + word + '\'' + ' a palindrome? ' + isPalindrome(word));

word = 'ingegni';
console.log('Is ' + '\'' + word + '\'' + ' a palindrome? ' + isPalindrome(word));

word = 'andrea';
console.log('Is ' + '\'' + word + '\'' + ' a palindrome? ' + isPalindrome(word));

word = 'mamma';
console.log('Is ' + '\'' + word + '\'' + ' a palindrome? ' + isPalindrome(word));
