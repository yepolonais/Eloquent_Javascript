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
