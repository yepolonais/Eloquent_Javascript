/**
 * DEFINING A FUNCTION
 * Une fonction qui ne retourne rien, ou qui contient la déclaration {return;} retourne "undefined".
 *
 * BINDINGS AND SCOPE
 * Chaque variable ou "liens" possède une portée, qui est en la région du programme dans laquelle la variable est visible.
 * Une variable définie dans une fonction ou un bloc est dites LOCALE.
 * Sinon sa portée est l'ensemble du programme. La variable est dites GLOBALE.
 * Chaque fois qu'une fonction est appelée, une nouvelle instance de ses variables locales est créée. Ceci permet d'isoler son environnement de travail.
 * Une variable créée avec "let" ou "const" est locale au bloc dans laquelle elle a été déclarée.
 * Une variable créée avec "var" est locale à la fonction dans laquelle elle a été déclarée.
 * Une portée à accès aux variables déclarées dans ses portées parentes
 *
 * FUNCTION NOTATION
 * Il y a trois possibilités pour déclarer une variable de fonction.
 *  - expression de fonction : let toto = function() { ... }
 *  - déclaration de fonction : function toto() { ... }
 *  - expression de fonction fléchée : const toto = () => { ... }
 *
 * Quelques points importants :
 *  - une variable de fonction peut être utilisée comme n'importe quelle autre variable (passage en paramètre, assignage d'une autre valeur, etc)
 *  - une fonction déclarée avec une déclaration de fonction peut être appelée dans sa portée AVANT d'être déclarée.
 *  - les expressions de fonction fléchée permettent d'avoir une syntaxe plus courte que les expressions de fonction
 *
 * THE CALL STACK
 * Une fonction a besoin de connaître le contexte dans lequel elle a été appelée, afin de pouvoir y retourner lorsqu'elle a terminée sont traitement.
 * L'endroit dans lequel l'ordinateur stocke ce contexte est appelé la PILE DES APPELS.
 * A chaque fois qu'une fonction est appelée, son contexte est stockée sur le haut de la pile.
 * Lorsqu'elle revient, ce contexte est enlevé du haut de la pile, et est utilisé pour continuer l'exécution du programme.
 * Il est ainsi possible "d'exploser" la pile si trop d'appels a des fonctions successives sont effectués (ex: recursion de fonction).
 *
 * OPTIONNAL ARGUMENTS
 * Javascript est très permissif sur le nombre d'arguments passés à une fonction
 * Si trop d'arguments sont passés à une fonction par rapport à sa définition, ceux en trop seront ignorés
 * Si pas assez sont fournis, ceux manquants verront leur valeur définie comme "undefined"
 *
 * CLOSURE
 * Une closure ou "fermeture" est une façon un peu particulière d'utiliser les fonctions.
 * L'idée centrale est d'utiliser le fait que les fonctions ont accès au contexte dans lequel elles ont été appelées.
 * En fait, une fonction qui utilise dans son corps une variable qui provient de son contexte est une closure.
 * Un exemple d'utilisation serait une fonction closure() qui retourne une autre fonction task() + des variables locales qui sont utilisées par task().
 * Ces variables locales peuvent être décrites dans le corps de closure(), ou bien être passée en paramètre de closure().
 *
 * Ex: function multiplier(factor) { return number => number * factor }
 * let twice = multiplier(2);
 * console.log(twice(5)); → 10
 *
 * RECURSION
 * En Javascript, une récursion est en général trois fois moins performant qu'utiliser une boucle.
 * La question est de savoir quand la compréhension du code doit primer sur sa vitesse d'exécution
 *
 * FUNCTIONS AND SIDE EFFECTS
 * Une fonction pure est une fonction qui ne produit pas d'effet de bord (comme un console.log) et qui retourne toujours le même résultat lorsqu'on lui passe les mêmes paramètres
 * Elle ne s'appuie pas sur des variables globales susceptibles de changer
 *
 */

/** EXERCISES */

/** MINIMUM */
function min(a,b){
   if(a<b) return a;
   else return b;
}

console.log(min(0,10));
console.log(min(19,12));

/** RECURSION */
function isEven(number){
   if(number < 0) number = -number;
   if (number === 0) return true;
   else if (number === 1) return false;
   else return isEven(number -2);
}

console.log(isEven(-2));

/** BEAN COUNTING */
function countBs(string){
   let upperCaseB = 0;
   for(let cursor = 0; cursor < string.length; cursor++){
      if(string[cursor] === "B") upperCaseB++;
   }
   return upperCaseB;
}
console.log(countBs("BbC"));

function countChar(string, char){
   let upperCaseChar = 0;
   for(let cursor = 0; cursor < string.length; cursor++){
      if(string[cursor] === char) upperCaseChar++;
   }
   return upperCaseChar;
}
console.log(countChar("BbCcC", "C"));
console.log(countChar("kakkerlak", "k"));
