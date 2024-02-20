
let companyName="Neosoft"; // string literal
 
let company1=new String("Neosoft") // String
let company2=new String("Neosoft") // String

console.log(companyName===company1); // values not compared, ref compared
console.log(company1===company2);  // values not compared, ref compared

console.log(company1.valueOf()===company2.valueOf()); // values compared
let company3="Neosoft";  // string literal

console.log(companyName===company3); // mem loc same : true  bcz value is same
console.log(companyName.valueOf()===company3.valueOf()); 