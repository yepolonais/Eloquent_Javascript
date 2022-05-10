/**
 * Ce chapitre traite principalement de la programmation orientée objet.
 * ENCAPSULATION
 * L'idée centrale derrière la POO est de diviser un programme en pièces plus petites, qui sont responsables de maintenir leur état.
 * L'intéraction entre ces pièces est effectuée via des interfaces, qui sont des ensembles restreints de fonctions ou de liaisons.
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
 * CLASSES
 *
 * Les prototypes peuvent être comparés à la notion de classes, que l'on trouve dans d'autres langage comme Java ou C#.
 * Une classe définie les propriétés et méthodes que l'on peut retrouver dans un objet.
 * En JS, les prototypes sont utiles pour définir des propriétés qui sont partagées par toutes les instances d'une classe => les méthdodes par exemple.
 * Les propriétés qui diffèrent suivant l'instance de l'objet doivent être définie directement dans l'objet.
 * Pour cela on utilise des fonctions appelées des constructeurs :
 *
 * function makeRabbit(type) {
      let rabbit = Object.create(protoRabbit);
      rabbit.type = type;
      return rabbit;
   }
 * Ce constructeur permet de définir le prototype de l'objet (protoRabbit), et renseigne la propriété type de l'instance.
 * Une écriture simplifiée existe qui utilise le mot clé "new" :
 *
 * function Rabbit(type) {
      this.type = type;
   }
   Rabbit.prototype.speak = function(line) { console.log(`The ${this.type} rabbit says '${line}'`) };
   let weirdRabbit = new Rabbit("weird");
 * Par convention, on note ce type de constructeur en Pascal Case.
 *
 * Toutes les fonction JS possèdent par défaut une propriété prototype, qui contient un objet vide dérivé de Object.prototype. Il est possible de le surcharger.
 *
 * CLASS NOTATION
 *
 * Une autre notation consiste à utliser le mot clé "class".
 *
 * class Rabbit {
      constructor(type) {
         this.type = type;
      }
      speak(line) {
         console.log(`The ${this.type} rabbit says '${line}'`);
      }
   }

   let killerRabbit = new Rabbit("killer");
 *
 * Pour l'instant, seule les méthodes sont acceptés dans la déclaration d'une class.
 *
 * OVERRIDING DERIVED PROPERTIES
 *
 * Lorsque l'on ajoute une propriété à un objet, celle-ci surchagera toutes propriétés de ses prototypes possédant le même nom.
 *
 * MAPS
 *
 * Utile lorsque l'on veut créer un objet dont les clés ne sont pas forcément des strings (des objets par exemple!)
 *
 * POLYMORPHISM
 *
 *
 *
 *
 */

/** EXERCISES */

/** FLATTENING */

let empty = {};
empty.toString();
empty.toString;



