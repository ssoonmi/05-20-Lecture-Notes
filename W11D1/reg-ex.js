// Regex that has a global search and ignores casing:
const str = 'This banana is mushy. I do not like MUSHY bananas';
const regex = /mushy/gi;
console.log(str.replace(regex, 'green')); // 'This banana is green. I do not like green bananas'

// Regex that has a global search and ignores casing with a function as second
// argument:
const str = 'This banana is mushy. I do not like MUSHY bananas';
const regex = /mushy/gi;
let count = 0;
console.log(str.replace(regex, match => {
  if (count++ % 2 === 0) return green;
})); // 'This banana is green. I do not like MUSHY bananas'

// Regex that has no global search:
const str = 'This banana is mushy. I do not like mushy bananas';
const regex = /mushy/;
console.log(str.replace(regex, 'green')); // 'This banana is green. I do not like green bananas'

// Pattern as a string:
const str = 'This banana is mushy. I do not like mushy bananas';
const patternStr = 'mushy';
console.log(str.replace(patternStr, 'green')); // 'This banana is green. I do not like mushy bananas'

// Cool pattern matching with regex:
const data = { name: 'Fido', age: 4, favToy: 'bone' }
const regex = /%\w+%/g;
const str = "My dog's name is %name%. He is %age% years old. His favorite toy is %favToy%."
const replacedStr = str.replace(regex, match => {
  console.log(match);
  const key = match.replace(/%/g, '');
  console.log(key);
  return data[key];
});
console.log(replacedStr);