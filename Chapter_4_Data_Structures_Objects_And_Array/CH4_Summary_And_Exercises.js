/**
 * PROPERTIES
 * Toutes les variables possèdent des propriétés, à l'exception de null et undefined.
 * Il est possible d'accéder à une propriété de deux manières :
 *    - avec un point : toto.length
 *    - avec des crochets : toto[length]
 * Le mot utilisé à la suite du point doit être le nom littéral de la propriété.
 * Par contre l'expression utilisée entre les crochets est évaluée afin de récupérer le nom littéral de la propriété.
 * Si nous avons défini une propriété 'my length', il sera impossible d'y accèder avec le point => toto.my length. Par contre toto["my length"] est OK.
 * Cela ne fonctionne pas non plus avec les nombres. toto.2 ne fonctionnera pas => toto[2] est OK.
 *
 * OBJECTS
 * Les variables de type objet sont des collections de propriétés dont le type peut varier.
 * On peut créer un objet en listant des propriétés entre accolades.
 * Attention, si la propriété ne possède pas un nom valide, il faut la mettre entre guillemets :
 * let descriptions = {
      work: "Went to work",
      "touched tree": "Touched a tree"
   };
 * Ceci implique que les accolades peuvent avoir deux significations :
 *    - au début d'une déclaration, elles initient un nouveau bloc
 *    - dans les autres cas, elles décrivent un objet.
 *
 * Il est possible de supprimer une propriété d'un objet en utilisant l'opérateur {delete}. Ex: delete toto.length.
 *
 * Il est possible de déclarer un objet en omettant de préciser la valeur de ses propriétés.
 * Dans ce cas, la valeur est récupérée dans la variable qui possède le même nom que la propriété.
 * let work = "Coucou";
 * let sleep = true;
 * let descriptions = {work, sleep}; // => OK car les variables work et sleep existent!
 *
 * MUTABILITY
 * Les valeurs de type nombre, chaine de caractère ou booléen sont immuables.
 * Par contre, les objets sont mutables car il est possible de modifier leurs propriétés.
 *
 * Quelques points importants :
 *  - une variable de fonction peut être utilisée comme n'importe quelle autre variable (passage en paramètre, assignage d'une autre valeur, etc)
 *  - une fonction déclarée avec une déclaration de fonction peut être appelée dans sa portée AVANT d'être déclarée.
 *  - les expressions de fonction fléchée permettent d'avoir une syntaxe plus courte que les expressions de fonction
 *
 * ARRAY LOOP
 * On peut utiliser une boucle classique ou bien le code : for (let item of collection){};
 *
 * REST PARAMETERS
 * Il peut être intéressant pour une fonction d'accepter un nombre variable d'argument. Dans ce cas il faut ajouter des points de suspensions avant le paramètre.
 * Ex: function max(...numéros){ for (let number of numbers) { // do stuff} };
 * Important : (...numéros) est un raccourci pour indiquer que la méthode attend une liste d'arguments variables. Ces arguments seront stockés dans la variable locale [numéros].
 * Pour appeler cette fonction, on peut soit:
 *    - passer une liste variable de paramètre: max(1, 2, 3, 4);
 *    - lui passer un tableau déstructuré: let numbers = [1, 2, 3, 4]; max(...numbers);
 * En fin de compte, la destructuration permet simplement de transformer un tableau en sa liste de valeurs.
 *
 * EXTRA
 * JS prévient lorsque nous tentons de nommer une variable avec "let" ou "const" dont le nom est déjà utilisé au sein de notre scope.
 * Ce n'est pas le cas avec "var" ou "function".
 *
 * Ex: function multiplier(factor) { return number => number * factor }
 * let twice_2 = multiplier(2); // twice_2 est une closure!!
 * console.log(twice_2(5)); → 10
 *
 * RECURSION
 * En Javascript, une récursion est en général trois fois moins performant qu'utiliser une boucle.
 * Ceci est dû au coût lié à l'appel d'une fonction, qui est plus important qu'une simple boucle.
 * La question est de savoir quand la compréhension du code doit primer sur sa vitesse d'exécution
 *
 * FUNCTIONS AND SIDE EFFECTS
 * Une fonction pure est une fonction qui ne produit pas d'effet de bord (comme par ex. console.log) et qui retourne toujours le même résultat lorsqu'on lui passe les mêmes paramètres
 * Elle ne s'appuie pas sur des variables globales susceptibles de changer
 */

/** EXERCISES */

/** SANDBOX */
let numbers = [4, 1, 9, -2];
console.log(...numbers);

function max(...numbers) {
  let result = -Infinity;
  console.log(numbers);
  for (let number of numbers) {
     console.log(number);
    if (number > result) result = number;
  }
  return result;
}
//console.log(max(...numbers));
console.log(max(numbers));

function maxim(numbers) {
  let result = -Infinity;
  console.log(numbers);
  for (let number of numbers) {
     console.log(number);
    if (number > result) result = number;
  }
  return result;
}
// console.log(maxim(numbers));
console.log(maxim(...numbers));





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

