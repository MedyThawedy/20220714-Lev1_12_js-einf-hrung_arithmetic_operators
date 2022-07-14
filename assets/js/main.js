//Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt.
let score1 = 5 + 5 * 10;
console.log('Ergebnis: ' + score1);

//Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern.
let score2 = (5 + 5) * 10;
console.log('Ergebnis: ' + score2);

//Du kannst Werte auf Variablen addieren.
let score3 = 0;
score3 = score3 + 10;
console.log('Ergebnis: ' + score3);

//Hier von gibt es eine verkürzte Version.
score3 += 10;
console.log('Ergebnis: ' + score3);

//Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;

//Verwende Inkrement-Operatoren
zahl++;
console.log('increment: ' + zahl);

//Verwende Dekrement-Operatoren
zahl--;
console.log('dekrement: ' + zahl);
