// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(str) {
  for (i = 0; i < str.length; i++) {
    if (str.slice(i, i + 1) === '-' || str.slice(i, i + 1) === '_') {
        str = str.slice(0, i) + str.slice(i+1, i + 2).toUpperCase() + str.slice(i+2, str.length);
    }
  }
  return str;
}


let index = toCamelCase('the-stealth-warrior');

console.log(index);

