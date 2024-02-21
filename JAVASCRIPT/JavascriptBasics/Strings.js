
let companyName="Neosoft"; // string literal
 
console.log(typeof companyName);  // string

let company1=new String("Neosoft") // String object
console.log(typeof company1); // String
let company2=new String("Neosoft") // String object
console.log(typeof company2);  // String
console.log(companyName===company1); // values not compared, ref compared
console.log(company1===company2);  // values not compared, ref compared

console.log(company1.valueOf()===company2.valueOf()); // values compared
let company3="Neosoft";  // string literal

console.log(companyName===company3); // mem loc same : true  bcz value is same
console.log(companyName.valueOf()===company3.valueOf()); 

// Type coercion means that the two values are compared only after attempting to convert them into the same type. 
console.log(companyName==company1);
// string === object (string) : true

console.log(company1==company2);

// object == object /**  no conversion takes place*/



console.log(22=='22'); // 22: number '22':string true
console.log(22==='22'); // false
console.log(new Number(22)==new Number(22)); // ref checking
console.log(new Number(22)===new Number(22)); // ref checking
console.log(22==new Number(22));
console.log(22===new Number(22));

console.log(22==new String('22'));

console.log(22==23); // false
console.log(22=='23'); // false
/** ==  (loose type checking)
 * if in comparsion 
 * 1. both are values
 * 2. at least one is value
 * 
 * then possible conversion of type is tried then comparsion of type done
 if in comparion
 both are objects then references are compared

 === (strict type checking)
 if values, comparsion of type is done without conversion,
 if objects, references are checked
*/

// String API
let len=companyName.length;
let ch=company3.charAt(0);
let b1=companyName.startsWith("India");
let b2=companyName.endsWith("soft");

// Strings immutable : 

let s1="Welcome to";
let concatString=s1.concat(" Neosoft");
console.log(s1); //1. Welcome to Neosoft 2. Welcome to 
console.log(concatString);

console.log(s1);
console.log(s1.concat(" Mumbai"));
console.log(s1);

let quote="live and let live";
console.log(quote.substring(0,5));
console.log(quote.substring(2,7));
console.log(quote.substring(5,0));
console.log(quote.substring(1));
console.log(quote.substring(9));
console.log(quote.indexOf('l'));
console.log(quote.lastIndexOf('l'));
console.log(quote.substring(0,-5)); /* 0, 0*/
console.log(quote.substring(2,-7)); /* 2, 0 => 0, 2 */
console.log(quote.substring(-7)); /* 0 */
console.log("--------------------");

console.log(quote.slice(0,5));
console.log(quote.slice(2,7));
console.log(quote.slice(5,0));
console.log(quote.slice(1));
console.log(quote.slice(9));
console.log(quote.slice(0,-5)); /* 0, counting from back */
console.log(quote.slice(2,-7)); /* 2, counting from back */
console.log(quote.slice(-7)); /* counting from back*/

let tag1="India is my country"
let tag2="     India is my country"
/* trimStart, trimEnd, trim , toUpperCase, toLowerCase, 
localeCompare (string literals, string objects ), slice, split*/

let tag3="India is my country"
let tag4="INDIA is my country"

if(tag3.toLowerCase()==tag4.toLowerCase()){
    console.log(tag3);
    console.log(tag4);
}
