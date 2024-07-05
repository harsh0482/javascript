let userName = "manubhai kanubhai kkk"

//string length
console.log(userName.length);

//string uppercase
console.log(userName.toUpperCase());

//string lowercase
console.log(userName.toLowerCase());

//index 2 pr character
console.log(userName.charAt(2));

//character kis position pr
console.log(userName.indexOf('k'));

//substring
console.log(userName.substring(0,5));

//slice
console.log(userName.slice(4,-6));

//whitespace remove
const newstring = "    hello  "
console.log(newstring);
console.log(newstring.trim());

//repleace
let repstring = "hy how are you ??"
console.log(repstring.replace('hy','hello'));
//avalible this string
console.log(repstring.includes('are'));

//merge two string
let str1="hello"
let str2="world"
console.log(str1.concat(', ',str2));

//template string
let firstName = "John"
let lastName = "Doe"
console.log(`welcome ${firstName} my compny ${lastName}`);