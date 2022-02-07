/**
 * Ce chapitre traite principalement de la programmation orientée objet.
 * ENCAPSULATION
 * L'idée centrale derrière la POO est de diviser un programme en pièces plus petites, qui sont responsables de maintenir leur état.
 * Ces pièces sont appelées des objets.
 * On peut distinguer deux types de propriétés dans un objet :
 *  - celles qui permettent à un utilisateur extérieur de manipuler l'objet = interface = propriétés publiques;
 *  - celles qui permettent à l'objet de fonctionner = implémentation = propriétés privées.
 *
 * L'encapsulation consiste à bien séparer ces deux types de propriétés au sein d'un objet.
 * Or cette distinction n'est pas native en JS : la convention consiste à préfixer les propriétés privées par un underscore (_propriété).
 *
 * METHODS
 * Une méthode est une propriété qui contient une valeur de fonction.
 *
 * METHODS AND THIS
 * Prenons la function :
 * function displayColor(color){
 *    console.log(`${this.name} is ${color}`);
 * }
 * Si on l'intègre à un objet Bob :
 * let Bob = {name: 'Bob', displayColor};
 * Lorsque l'on appelle Bob.displayColor(), {this} pointera vers Bob.
 *
 * Si on souhaite utiliser directement la fonction displayColor en lui précisant la valeur de {this}, il faut utiliser call()
 *  => displayColor.call(Bob, 'red');
 * Sinon {this} pointera vers l'objet sur lequel la fonction a été APELLEE. Ceci implique que l'on a pas accès au scope de l'endroit où la fonction est DEFINIE.
 *
 * Le comportement est inversée pour une fonction fléchée. Ces dernières récupèrent le {this} du scope qui l'entoure.
 *
 * PROTOTYPES
 * Les objets JS sont particuliers car ils possèdent un prototype.
 * Il s'agit d'un objet imbriqué qui sert comme source de propriétés de secours.
 * Si l'on ne trouve pas une propriété dans un objet, JS tentera de le trouver dans son prototype, puis le prototype du prototype, etc.
 * A la fin de cette chaîne, on retrouve Object.prototype, qui est l'entité derrière à peu près tous les objets.
 * Cette dernière fournit la méthode toString()
 *
 * Les fonctions dérivent de Function.prototype, tandis que les tableaux dérivent de Array.prototype.
 * Il est possible de créer un objet avec un prototype spécifique en utilisant Object.create(targetPrototype).
 *
 *
 * CLASSES
 *
 *
 */

/** EXERCISES */

/** FLATTENING */

let empty = {};
empty.toString();
empty.toString;



