function add7(num) {
  return (num +7);
}

function multiply(num1,num2) {
  return (num1 * num2);
}

function capitalize(word) {
  let len = word.length;
  let extract = word.charAt(0);
  let first = extract.toUpperCase();
  let secExtract = word.substr(1);
  let second = secExtract.toLowerCase();
  let final = first.concat(second);
  return (final);
  
}

function lastLetter(word) {
  let len = word.length;
  let lletter = word.substr(len-1);
  return lletter;
}

console.log(add7(3));
console.log(multiply(1,2));
console.log(lastLetter('abcde'));
console.log(capitalize('this is nepal'));
