let str1="hello";
let str2="helloeveyone";

//Using localcomapre
console.log(str1.localeCompare(str2));

let sentence=" Hello,  World.";
//Using slice
let sliced=sentence.slice(7);
console.log(sliced);

//Using split
let word =sentence.split(", ");
console.log(word);

//Using includes
console.log(sentence.includes("rld"));
console.log(sentence.includes("123"));

//Joins
let names=["dhanshree","nupur","disha","komal"];
let joined=names.join("/");
console.log(joined);

//includes in array
console.log(names.includes("seeta"));
console.log(names.includes("nupur"));

//reverse
let reversed= names.slice().reverse();  //it will create a copy n then reverse
console.log(reversed);

let sorted=names.slice().sort();
console.log(sorted);

let found=names.find(namee =>namee.length> 5);
console.log(found);

const salary=[8000,9000,2000,1200,4000];
console.log(salary);

salary.forEach(salaries=>console.log(salaries));

const filtersalary=salary.filter(salaries=>salaries<10000 || salaries >15000);
filtersalary.forEach(salaries=>console.log(salaries));

let incrementsal=salary.map(salaries=>salaries+2000);
incrementsal.forEach(salaries=>console.log(salaries));

let sumsal=salary.reduce((total,salaries)=>total + salary,0);
console.log(sumsal);
