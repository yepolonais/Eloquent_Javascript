/**
 **** EVENT HANDLERS
 * L'idée principale est de pouvoir appeler une fonction lorsqu'un evt spécifique se produit (par exemple l'utilisateur clique sur un bouton)
 * window.addEventListener("click", () => {
    console.log("You knocked?");
  });
 *
 **** EVENTS AND DOM NODES
 * Il est possible d'ajouter directement un gestionnaire d'evt sur un elt du DOM en lui ajoutant l'attribut on(event) => ex: onclick, onmouseover.
 * Toutefois si l'on souhaite ajouter plusieurs gestionnaire sur le même evt d'un elt du DOM, il faut empiler des méthodes addEventListener().
 * Pour supprimer la souscription à un evt, il faut utiliser removeEventListener() en lui passant la même fonction de callback que celle passée avec addEventListener.
 *
 **** EVENT OBJECTS
 * La fonction de callback du gestionnaire d'evt reçoit par défaut un objet event, qui contient des données sur l'evt déclencheur.
 * En général, cet objet contient une propriété "target" qui décrit la node à l'origine de l'evt.
 *
 **** PROPAGATION
 * Lorsque l'utilisateur clique sur un bouton dans son IHM, l'evt 'clic' va se propager de la node sur laquelle le clic a été effectué à ses nodes parentes, jusqu'à atteindre l'objet racine - en général {window}.
 * Il est toutefois possible d'annuler ce comportement en appelant la méthode stopPropagation() dans le callback du gestionnaire d'evt.
 * Il peut être utile de se baser sur la propriété 'target' de l'objet 'event' pour savoir quelle node est à l'origine d'un evt, et ainsi adapter la fonction de callback.
 *
 **** DEFAULT ACTIONS
 * La plupart des evts possèdent un comportement par défaut.
 * Par ex, lorsque l'on clique sur un lien, le navigateur nous y emmène. Lorsque l'on appuie sur la flèche du bas, la page défile vers le bas.
 * En général, les gestionnaires d'evt sont appelés avant ce comportement par défaut.
 * Il est alors possible de prévenir ce comportement par défaut avec la méthode preventDefault().
 *
 * KEY EVENTS
 * Lorsque l'utilisateur on appuie sur une touche du clavier, le navigateur déclenche un evt 'keydown'. Lorsque le bouton est relaché => 'keyup'
 * window.addEventListener("keydown", event => {
    if (event.key == "v") {
      document.body.style.background = "violet";
    }
  });
 * Attention à 'keydown', l'evt se déclenche de manière répété lorsque le bouton est maintenu.
 * Voici comment prendre en compte les combinaisons, ici avec Ctrl:
 * window.addEventListener("keydown", event => {
    if (event.key == " " && event.ctrlKey) { // ou shiftKey, altKey
      console.log("Continuez!");
    }
  });
 * Le noeud du DOM duquel un evt de clavier est originaire dépend de l'elt qui était 'focus' lorsque la touche a été pressée.
 * La plupart des noeuds ne peuvent être 'focus', à moins d'y ajouter une attribut tabindex. Les liens, boutons et champs de formulaire peuvent être 'focus' nativement.
 * Lorsqu'aucun noeud n'est 'focus', {document.body} capte nativement les evts de clavier.
 *
 **** POINTER EVENTS
 *** Mouse Click
 *
 * Les evts 'mousedown' et 'mouseup' sont déclenchés lorsque le bouton de la souris est pressé puis relaché
 * Ils sont captés par leur noeud du DOM directement sous le pointeur de la souris.
 * A la suite de 'evt 'mouseup', un evt 'clic' est déclenché sur les noeuds pointés lors de l'appui ET lors du relachement du bouton.
 * Il s'agit en général du même noeud, sauf si l'utilisateur effectue un drag&drop.
 * Un double clic déclenche l'evt 'dblclick' à la suite de l'evt 'click'
 * Les propriétés 'clientX' et 'clientY' fournisse les coordonnées en pixel du clic (origine : angle haut-gauche de l'écran)
 * Les propriétés 'pageX' et 'pageY' fournisse aussi les coordonnées en pixel du clic (origine : le document). Elles varient donc avec le scroll.
 *
 *** Mouse Motion
 * Lorsque la souris se déplace, un evt 'mousemove' est déclenché, qui permet de suivre le déplacement de la souris.
 *
 *
 */


