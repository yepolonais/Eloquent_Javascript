const promesseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
// Ici, "promesseA" est déjà acquittée.
promesseA.then( (val) => {
   return val;
});

let maPremierePromesse = new Promise((resolve, reject) => {
  // On appelle resolve(...) lorsque notre action asynchrone
  // a réussi et reject(...) lorsqu'elle a échoué.
  // Dans cet exemple, on utilise setTimeout(...) pour simuler
  // du code asynchrone. En situation réelle, on utiliserait
  // plutôt XHR ou une API Web asynchrone.
  setTimeout( function() {
    resolve("Succès !")  // Tout s'est bien passé !
  }, 250)
})

maPremierePromesse.then((messageReussite) => {
  // messageReussite correspond à ce qui a été passé à
  // la fonction resolve(...) ci-avant.
  console.log("Youpi ! " + messageReussite)
});

/**
 * Pour faire simple, on peut effectuer tout type de code dans notre objet Promise.
 * Lorsque l'exécution s'effectue sans accrox, au lieu de retourner une valeur, on passe notre valeur de retour à resolve().
 * Cette valeur sera passée en paramètre au then().
 * Si notre code ne fonctionne pas correctement, alors il suffit de passer un code d'erreur, ou bien l'exception créée à reject().
 * De même, cette valeur sera lue par notre bloc catch, ou bien par le second callback du then().
 *
 */


"use strict";

// Pour tester la gestion d'erreur, on a un seuil
// qui provoquera des erreurs aléatoirement
const SEUIL_A = 8; // Abaissez ce seuil à 0 pour forcer les erreurs

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(
      function() {
        const randomInt = Date.now();
        const value = randomInt % 10;
        try {
          if(value >= SEUIL_A) {
            throw new Error(`Trop grand : ${value}`);
          }
        } catch(msg) {
            reject(`Erreur dans le callback ${msg}`);
        }
         resolve(value);
         return;
      }, 500);
    // Vous pouvez expérimenter en décommentant le 'throw'
    // qui suit
  } catch(err) {
    reject(`Erreur à l'initialisation : ${err}`);
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false ;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Problème pour avoir le nombre : ${reason}`);
  throw -999; // on doit utiliser throw pour maintenir l'état d'erreur
}

function promiseGetWord(parityInfo) {

  const tetheredGetWord = function(resolve,reject) {
    const theNumber = parityInfo.theNumber;
    const seuil_B = SEUIL_A - 1;
    if(theNumber >= seuil_B) {
      reject(`Toujours trop grand : ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? 'impair' : 'pair';
      resolve(parityInfo);
    }
    return;
  }
  return new Promise(tetheredGetWord);
}

(new Promise(tetheredGetNumber))
  .then(determineParity,troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log("On a eu : ",info.theNumber," , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if(reason === -999) {
      console.error("Erreur précédemment gérée");
    }
    else {
      console.error(`Problème avec promiseGetWord(): ${reason}`);
    }
   })
  .finally((info) => console.log("C'est fini."));
