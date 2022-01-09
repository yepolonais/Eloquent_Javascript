/**
 * POINTS A RETENIR
 * Javascript regroupe les bits de la mémoire de l'ordinateur en "valeur" (values)
 * Toutes ces valeurs possèdent un type, qui va déterminer leur rôle (= nombre, texte, fonction, etc)
 *
 * NOMBRES
 * Stocké par défaut en 64 bits, ce qui réprésente 2^64 = 18 quintillions nombres
 * Si l'on soustrait les bits utilisés pour stocker le signe du nombre (+ ou -), on tombe à 9 quadrillions
 *
 * CHAINE DE CARACTERE
 * Javascript utilise le standard Unicode pour transformer une chaine de caractère en suite de chiffre
 * Cette suite de chiffre forme un nombre qui peut ensuite être converti en bits
 *
 * COMPARAISON
 * Une seule valeur n'est pas égale à elle même: NaN == Nan => false (Not a number)
 * NaN est en effet représenter le résultat d'un calcul qui n'a pas de sens (comme par ex 0 divisé par 0).
 * Le résultat d'une opération insensée n'est pas sensé être égal au résultat d'une autre opération insensée.
 *
 * VALEURS VIDES
 * "Null" et "undefined" sont des valeurs, mais elle ne portent pas d'information ayant du sens.
 *
 * COERCITION DE TYPE (type coercion)
 * Quand un opérateur est appliqué sur un type de valeur incorrect, JS va tenter de convertir la valeur dans le type qu'il attend.
 * Par exemple, lorsque l'on applique l'opérateur - sur une chaine de caractère, il va tenter de convertir la chaine de caractère en nombre.
 * Par ex : "5" - 1 => 4
 *
 * Il est notable que null == undefined retourne true.
 * Cela implique que si l'on veut tester si une valeur est null ou undefined, il suffit de tester si valeur == null.
 * Lorsque l'on souhaite éviter la coercition de type, il suffit d'utiliser les opérateurs de comparaison triples : === ou !==.
 *
 * COURT CIRCUITAGE en uilisant les OPERATEURS LOGIQUES
 * Les opérateur logiques && et || convertisse dans un premier la valeur à leur gauche en booléen, afin de décider quoi faire ensuite.
 * Les valeurs 0, Nan, "", null et undefined retourne false.
 * Il est notable que la valeur à droite de l'opérateur logique ne sera évaluée que si la valeur à droite retourne false.
 */
