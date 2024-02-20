
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

// String API

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