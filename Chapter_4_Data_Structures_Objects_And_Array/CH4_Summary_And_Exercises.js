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
 */

/** EXERCISES */

/** SANDBOX */
let numbers = [4, 1, 9, -2];

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
max(numbers);

function maxim(numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
// console.log(maxim(numbers));
maxim(numbers);

/** THE SUM OF A RANGE */
let numbers_2 = [1, 2, 5, 4, 9, 8];

function range(start, end, step = 1){
   let numbers = [];
   for(let i = start; i <= end; i+=step ){
      numbers.push(i);
   }
   return numbers;
}

function sum(numbers){
   return numbers.reduce((iteree, next) => iteree + next);
}

sum(range(1,10));

/** REVERSING AN ARRAY */

function reverseArray(arr){
   let reverseArray = [];
   for(let i = arr.length-1 ; i >= 0 ; i--){
      reverseArray.push(arr[i]);
   }
   return reverseArray;
}
reverseArray(numbers);

function reverseArrayInPlace(arr){
   let reverseArray = [];
   // Première boucle pour créer un tableau intermédiaire contenant les valeurs inversées
   for(let i = arr.length-1 ; i >= 0 ; i--){
      reverseArray.push(arr[i]);
   }
   // Seconde boucle pour réécrire directement les valeurs dans le tableau originel
    for(let i = 0; i < arr.length; i++){
       arr[i] = reverseArray[i];
    }
}

function reverseArrayInPlace_v2(arr){
   // Boucle sur la moitié du tableau en échangeant les valeurs. Celle du milieu ne change pas si tableau impair
   let halfLength = Math.floor(arr.length / 2);
   for(let i = 0; i < halfLength ; i++){
      let trans = arr[i];
      arr[i] = arr[arr.length-i-1];
      arr[arr.length-i-1] = trans;
   }
}

let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
reverseArrayInPlace_v2(arrayValue);
arrayValue;


/** A LIST */
function arrayToList(arr){
   let list = {};
   let trans = list;
   arr[0], arr[1];
   for(let i = 0 ; i < arr.length; i++){
      trans.value = arr[i];
      if(i < arr.length-1)
      {
         trans.rest = {};
         trans = trans.rest;
      } else trans.rest = null;

   }
   return list;
}


arrayToList([10, 20, 30]);

function listToArray(list){
   let arr = [];
   do {
      arr.push(list.value);
      list = list.rest;
   } while (list !== null)
   return arr;
}

listToArray(arrayToList([10, 20, 30]));

function prepend(item, list){
   return {
      value : item,
      rest : list
   }
}

prepend(10, prepend(20, null));

function nth(list, number){
   if(number === 0)  return list.value;
   else if(list.rest === null) return undefined;
   else{
      number--;
      return nth(list.rest, number);
   }
}

nth(arrayToList([10, 20, 30, 40, 50]), 4);

/** DEEP COMPARISON */

/**
 * Le plus simple est de commencer par comparer leur nombre de propriétés => si c'est différent on retourne false
 * Ensuite, il faut vérifier si les deux objets possèdent les mêmes propriétés (on peut tenter de faire un set et vérifier sa longueur)
 * Puis il faut comparer chaque valeur de chaque propriété :
 *  - on commence par comparer les types des valeurs de chaque propriété.
 *      => Si certains sont différentes, on retourne faux. Sinon on continue
 *  - Puis on compare directement les valeurs des propriétés.
 *    - on débute en comparant les valeurs de types int, bool et string.
 *    - puis on compare les valeurs de type objet :
 *       => si les deux objets sont null, on continue
 *       => si seulement un des objets est null, on retourne faux
 *       => si les deux valeurs sont biens des objets, on effectue une récursion.
 * NB: l'utilisation de array.every() est très efficace pour sortir de la boucle prématurément.
 * @param {*} obj1
 * @param {*} obj2
 * @returns
 */
function deepEqual(obj1, obj2){

   // Initialisation
   let obj1Keys = Object.keys(obj1);
   let obj2Keys = Object.keys(obj2);

   // Check property number
   if(obj1Keys.length != obj2Keys.length)
      return false;

   // Check property key
   if(!obj1Keys.every(key => obj2[key]))
      return false;

   // Check property value
   {
      // Array containing both objects values for comparison
      let objValues =  obj1Keys.map(key =>[obj1[key], obj2[key]])

      // Check values type
      let sameType = objValues.every( value => typeof value[0] === typeof value[1]);
      if(!sameType)
         return false;

      // Arrays containing JS types
      let valueTypes = ['number', 'string', 'boolean', 'symbol', 'undefined', 'bigint'];
      let allTypes = [...valueTypes, 'null', 'object'];

      // Sort [objValues] so that value types will be processed before reference types
      let objValuesTypeSorted = objValues.sort((a, b) =>  allTypes.indexOf(typeof a[0]) - allTypes.indexOf(typeof b[0]));
      // NB: every() is useful here to exit the loop as fast as possible
      let sameValues = objValuesTypeSorted.every(values => {
         // Check value types
         if(valueTypes.includes(typeof values[0]))
            return values[0] === values[1];

         // Check reference types
         else
         {
            if (values[0] === null && values[1] === null)
               return true;
            else if(values[0] === null && values[1] !== null || values[1] === null && values[0] !== null)
               return false;
            else
               return deepEqual(values[0], values[1]);
         }
      })
      if(!sameValues)
         return false;
   }
   return true;
}

let obj = {here: {is: "an"}, object: 66, object_2: 56};

//deepEqual(obj, {here: {is: "an"}, object: 66, object_3: 57}); /*?.*/
//equalB(obj, {here: {is: "an"}, object: 66, object_3: 57});/*?.*/


function equalB(a, b) {
   a;
   b;
  if (a === b)
      return true;
  if (a && b && typeof a === 'object' && typeof b === 'object')
   {
      if (a.constructor !== b.constructor)
         return false;

      let length, index;
      if (Array.isArray(a))
      {
         length = a.length;
         if (length !== b.length) return false;
         index = length;
         while (index--) {
            if (!equalB(a[index], b[index]))
               return false;
         }
         return true;
      }
      const keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
         return false;
      index = length;
      while (index--) {
         if (!equalB(a[keys[index]], b[keys[index]]))
            return false;
      }
      return true;
   }
  return false;
};

var a = {
    a: 123,
    b: true,
    d: [
        1, 2, 3,
        {
            t: 'test',
            k: [{},
                [9, 8, 7],
                {}
            ]
        },
        [],
      	{},
      	{
            a: 'text',
            bd: true
        }
    ]
};

var b = {
    a: 123,
    b: true,
    d: [
        1, 2, 3,
        {
            t: 'test',
            k: [{},
                [9, 8, 7],
                {}
            ]
        },
        [],
      	{},
      	{
            a: 'text',
            b: true
        }
    ]
};

deepEqual(a, b)/*?.*/;
equalB(a, b)/*?.*/;

