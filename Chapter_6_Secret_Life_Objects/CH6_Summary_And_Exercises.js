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
 * L'idée derrière le polymorphisme est qu'un objet supporte une certaine interface.
 * Si c'est le cas, il pourra s'intégrer sans souci à du code qui expose la même interface, cad des des popriétés et méthodes ayant les mêmes signatures.
 *
 * SYMBOLS
 * Le problême derrière ces interfaces est que différentes interfaces peuvent utiliser des méthodes ou prop ayant les mêmes signatures, mais produisant des résultats différents.
 * Utiliser ces deux interfaces en parallèle créérait un conflit. C'est là qu'interviennent les symboles.
 * La particularité d'un symbole est qu'il est unique - on ne peut pas créér le même symbole deux fois.
 *
 * Symbol("name") === Symbol("name"); // => false
 *
 * Utiliser des symboles pour nommer les propriété d'une interface permet de s'assurer qu'il n'y aura pas de conflit.
 * Pour les utiliser il faut les noter entre crochet:
 * const toStringSymbol = Symbol("toString");
      Array.prototype[toStringSymbol] = function() {
      return `${this.length} cm of blue yarn`;
      };
 *
 * THE ITERATOR INTERFACE
 * Lorsque l'on fournit un objet à une boucle for/of, ce dernier doit être itérable.
 * Cela signifie qu'il doit posséder une méthode nommée avec le symbole [Symbol.iterator].
 * Ce symbole est défini par JS comme une prop de la fonction Symbol.
 * Lorsque cette méthode est appelé, elle doit renvoyer un object qui respecte une seconde interface : iterator.
 * Ce second objet possède une méthode next(), qui renvoie un objet avec les prop value (qui pointe vers la valeur suivante) et done (un booléen indiquant lorsqu'il n'y a plus de valeur suivante).
 * next, value et done ne sont pas des symboles.
 * Il est possible d'utiliser l'interface [Symbol.iterator] directement:
 *
 * let brochet = "Brochet"[Symbol.iterator]();
 * brochet.next(); // {value: "B", done: false};
 * brochet.next(); // {value:"r", done : false}
 * etc...
 *
 * Il est possible de l'intégrer à nos propres objets
 *
 * class Matrix {
      constructor(width, height) {
         this.width = width;
         this.height = height;
      }
   }

   class MatrixIterator {
      constructor(matrix) {
         this.x = 0;
         this.y = 0;
         this.matrix = matrix;
      }

      next() {
         if ("plus d'objet") return {done: true};
         let value = "some code";
         else return {value, done: false};
      }
   }

   Matrix.prototype[Symbol.iterator] = function() {
      return new MatrixIterator(this);
   };
 *
 * GETTER, SETTER AND STATICS
 * Les getters et les setters sont utilisés pour lire ou écrire une propriété de notre objet, en lui ajoutant une certaine logique.
 * Les méthodes statiques permettent d'appeler une méthode d'un objet sans avoir besoin de l'instancier. Cela peut être utile pour étendre l'instanciation d'une classe.
 * class Temperature {
      constructor(celsius) {
         this.celsius = celsius;
      }
      get fahrenheit() {
         return this.celsius * 1.8 + 32;
      }
      set fahrenheit(value) {
         this.celsius = (value - 32) / 1.8;
      }

      static fromFahrenheit(value) {
         return new Temperature((value - 32) / 1.8);
      }
   }
 *
 * INHERITANCE
 * L'héritage consiste à créer un objet qui hérite d'un autre objet (ses propriétés et méthodes).
 * Il peut surcharger les propriétés de son parent.
 * Contrairement aux concepts d'encapsulation et polymorphisme qui permettent de décorréler le code, l'héritage le lie.
 * Il faut donc l'utiliser avec parcimonie.
 *
 * THE INSTANCEOF OPERATOR
 * L'opérateur binaire 'instanceof' permet de savoir si un objet dérive d'une classe particulière.
 * Il remonte les liens d'héritage
 *
 */

/** EXERCISES */

/** SYMBOLS */

let nameSym = Symbol("name");
let bool = nameSym === Symbol("name");
let bool2 = Symbol("name") === Symbol("name");

/** A VECTOR TYPE */

class Vec {
      constructor(x, y) {
         this.x = x;
         this.y = y;
      }
      plus({x,y}) {
         return new Vec(this.x + x, this.y + y);
      }
      minus({x,y}) {
         return new Vec(this.x - x, this.y - y);
      }
      get length(){
         return Math.sqrt(this.x**2 + this.y**2)
      }
   }

new Vec(1, 2).plus(new Vec(2, 3));
new Vec(1, 2).minus(new Vec(2, 3));
new Vec(3, 4).length;

/** GROUP */

class Group{
   constructor(){
      this.values = [];
   }
   add(item){
      if(!this.has(item)) this.values.push(item);
   }
   delete(item){
      if(this.has(item)) this.values.splice(this.values.indexOf(item),1);
   }
   has(item){
      if(this.values.indexOf(item) === -1) return false;
      else return true;
   }
   /**
    *
    * @param {object} iter
    * @returns
    */
   static from(iter){
      let newGroup = new Group();
      for (let item of iter){
         newGroup.add(item);
      }
      return newGroup;
   }

   // Interface iterable
   [Symbol.iterator] = function() {
      return new GroupIterator(this)
   }

}



let group = Group.from([10, 20]);
group.has(10);
group.has(30)
group.add(10);
group.delete(10);
group.has(10);

/** ITERABLE GROUPS */

class GroupIterator{
   constructor(group){
      this.currentIndex = 0;
      this.group = group;
   }
   next(){
      if((this.currentIndex == this.group.values.length)){
         return {done: true};
      }
      else {
         let value = this.group.values[this.currentIndex];
            this.currentIndex += 1;
         return {value, done: false};
      }

   }
}

for (let value of Group.from(["a", "b", "c"])) {
  value;
}

/** BORROWING A METHOD */

let map = {one: 1, two: 2, hasOwnProperty: true};
Object.prototype.hasOwnProperty.call(map, "one");
