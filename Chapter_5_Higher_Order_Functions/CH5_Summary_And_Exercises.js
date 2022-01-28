/**
 * ABSTRACTION
 * Il est primordiale pour un developpeur de savoir découper son programme en actions compréhensibles par tous, et qui cachent les détails important peu.
 * C'est le concept de l'abstraction : ceci permet de parler d'un problème à un niveau plus élevé (ou plus abstrait)
 *
 * HIGHER-ORDER FUNCTIONS
 * Une fonction qui opère sur une autre fonction, soit en la prenant en argument ou bien en la retournant, est une fonction d'ordre supérieur.
 * Ces fonctions sont utiles car elles permettent de raisonner en terme d'actions, et pas juste de valeurs.
 * C'est le cas de la méthode Array.forEach(func), qui permet d'effectuer une action sur chaque élément d'un tableau.
 * Ou bien de Array.map(), qui effectue une transformation sur chaque elt d'un tableau, et retourne un nouveau tableau (fonction pure).
 *
 * SUMMARIZING WITH REDUCE
 * Un réducteur est un fonction qui permet de réduire le contenu d'un tableau en une seule valeur (par ex obtenir la somme de ses elts).
 * Elle est implémentée avec Array.reduce(func, start).
 * Elle est particulière car la fonction func qu'on lui passe demande un couple d'argument (acc, iter), sur laquelle on effectue un traitement (ex: => acc + iter).
 * Le paramètre acc est un accumulateur. Au début du traitement, il est égal à start (par exemple 0).
 * Le paramètre iter est un elt du tableau. Au début du traitement, il est égal au premier elt du tableau, puis sa valeur est décalée vers l'elt suivant, etc.
 * A chaque fois que la valeur de iter est décalée vers l'elt suivant, le traitement => acc + iter est effectuée, et le résultat du traitement est stocké dans iter.
 * A la fin du traitement, la valeur de acc est retournée.
 *
 * La méthode Array.reduce() facilite le traitement dans le cas où le tableau qu'on lui passe possède au moins un elt.
 * On peut omettre le paramètre start : la méthode prendra le premier elt du tableau comme valeur de départ pour acc, et commencera la réduction sur le second elt du tableau.
 *
 */

/** EXERCISES */

/** FLATTENING */

let arrays = [[1,2,3], [4,5], [6]];
let toto = arrays.reduce((acc, iter) => acc.concat(iter));

/** YOUR OWN LOOP */

function loop(iteration, test, update, body){
      if(test(iteration))
       {
          body(iteration);
          loop(update(iteration), n => n > 0, n => n - 1, console.log);
       }
}

loop(3, n => n > 0, n => n - 1, console.log);


/** EVERYTHING */

function every(array, test){
   let passed = true;
   array.forEach(element => {
      if(!test(element))
         passed = false;
   });

   return passed;
}

function every_2(array, test){
   return !array.some(element => !test(element));
}

every([1, 3, 5], n => n < 10);
every([2, 4, 16], n => n < 10);
every([], n => n < 10)
every_2([1, 3, 5], n => n < 10);
every_2([2, 4, 16], n => n < 10);
every_2([], n => n < 10)

/** DOMINANT WRITING DIRECTION */

function dominantDirection(text){
   // Exercice chiant qui nécessite de réutiliser les fonction du bouquin
}

