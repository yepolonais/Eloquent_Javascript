/**
 * EXPRESSION AND STATEMENT
 * Un bout de code qui produit une valeur est appellé une EXPRESSION.
 * Une valeur écrite litéralement est une expression.
 * Un opérateur unaire appliqué à une expression ou un opérateur binaire appliqué à deux expressions est aussi une expression.
 * Une DECLARATION ("statement") est une suite d'une ou plusieurs expression, qui se termine par un point virgule (bien que l'on puisse l'omettre dans certains cas en JS)
 * Une déclaration peut être comparée à une phrase, et une expression à une partie de la phrase.
 *
 * BINDINGS
 * Afin de stocker en mémoire des valeurs que nous souhaitons utiliser, il faut créer des "LIENS" ou "VARIABLES" en JS. Sinon ces valeurs seraient dissipées.
 * Dès lors qu'un lien a été créé, on peut l'utiliser comme expression.
 * Ces liens doivent être vus comme des tentacules, qui agripperaient et retiendraient une valeur spécifique. Elles peuvent agripper d'autres valeurs au cours de leur existence.
 * Deux liens peuvent agripper la même valeur.
 *
 * ENVIRONMENT
 * La liste des liens couplée aux valeurs qu'elle agrippe constitue "l'ENVIRONNEMENT".
 *
 * FUNCTIONS
 * Une FONCTION est un bout de programme contenu dans une valeur. On peut appliquer cette valeur pour lancer le programme.
 * On dit que l'on invoquer, appelle ou bien applique une fonction pour l'exécuter.
 * Une fonction peut produire ("retourner") une valeur.
 * Dans ce cas-là, l'appel à la fonction constitue une expression (ex: Math.max(2,4)), qui peut être réutilisée dans des expressions plus large.
 *
 */

/** EXERCISES */

/** LOOPING A TRIANGLE */

for (let i = 0, hashtag = "#" ; i < 7; i++){
   console.log(hashtag)
   hashtag += "#";
}

/** FIZZBUZ */

let fizzBuzz = [];
for(let i = 1; i<=100; i++){
   if (i%3 === 0 && i%5 === 0) fizzBuzz.push("FizzBuzz");
   else if (i%3 === 0) fizzBuzz.push("Fizz");
   else if (i%5 === 0) fizzBuzz.push("Buzz");
   else fizzBuzz.push(i);
}
console.log(fizzBuzz);

/** CHESSBOARD */

let chessboard = "";
let size = 8;
for(let line = 0; line < size ; line++)
{
   for(let column = 0; column < size; column++)
   {
      if(line % 2 === 0)
      {
         if(column % 2 === 0) chessboard += " ";
         else chessboard += "#";
      }
      else
      {
         if(column % 2 === 0) chessboard += "#";
         else chessboard += " ";
      }
   }
   chessboard += "\n";
}
console.log(chessboard);
