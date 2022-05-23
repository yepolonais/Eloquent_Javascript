/** REGEXP GOLF */

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes){
    regexp.test(str);
  }
  for (let str of no) {
    regexp.test(str);
  }
}

// verify(/ca[rt]/,
//        ["my car", "bad cats"],
//        ["camper", "high art"]);

// verify(/pr?op/,
//        ["pop culture", "mad props"],
//        ["plop", "prrrop"]);

// verify(/ferr(et|y|ari)/,
//        ["ferret", "ferry", "ferrari"],
//        ["ferrum", "transfer A"]);

// verify(/ious\b/,
// ["how delicious", "spacious room"],
// ["ruinous", "consciousness"]);

// verify(/\s[\.,:;]/,
//        ["bad punctuation ."],
//        ["escape the period"]);

// verify(/\w{7}/,
//        ["Siebentausenddreihundertzweiundzwanzig"],
//        ["no", "three small words"]);

verify(/\b[^\We]+\b/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);

/** QUOTING STYLE */

let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
let regex_2 = /(^|\W)'|'(\W|$)/g;
regex_2.exec("'I'm the cook,' he said, 'it's my job.'");
regex_2.exec("'I'm the cook,' he said, 'it's my job.'");
regex_2.exec("'I'm the cook,' he said, 'it's my job.'");
regex_2.exec("'I'm the cook,' he said, 'it's my job.'");
regex_2.exec("'I'm the cook,' he said, 'it's my job.'");
regex_2.exec("'I'm the cook,' he said, 'it's my job.'");
(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));

/** NUMBERS AGAIN */

let number = /^(\+|-)?(\d+\.?\d*|\d*\.?\d+)(e(\+|-)?)?\d*$/i;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    `Incorrectly accepted '${str}'`;
  }
}
