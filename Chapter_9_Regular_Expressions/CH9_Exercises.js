
// recherche
let regex = /'[^']*'/;

regex.exec("She said 'hello'");


let notBinary = /[^01]+/;
notBinary.exec("1100100010100110");
// → false
notBinary.exec("1100220010200110");
// → true

/bad(ly)?/.exec("badly")

function getDate(string) {
  let [_, month, day, year] = /(^\d{1,3})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

getDate("100-1-30000");


let regex2 = /^\d$/;
regex2.test('100000')

let animalCount = /^\d+ (pig|cow|chicken)s?\b/;
animalCount.test("15 pigs ");
animalCount.test("15 pigchickens");

let myRegex = /^.*/;

myRegex.exec("abc")

"j'arrive à pied par la chine".replace(/(p) (ch)/, "$2 $1");
