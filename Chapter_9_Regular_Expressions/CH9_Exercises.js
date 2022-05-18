
// recherche
let regex = /'([^']*)'/;

regex.exec("She said 'hello'");


let notBinary = /[^01]+/;
notBinary.exec("1100100010100110");
// → false
notBinary.exec("1100220010200110");
// → true

/bad(ly)?/.exec("badly")
