
let ar1=[];
console.log(ar1.length);
/*arrays dynamic in size, arrays are  mutable*/
ar1[0]=67;
ar1[1]="hello";
console.log(ar1.length);
/* function to add elements in array */
ar1.push(45,"hello",12,true,678,56000.45);
ar1.push(45);
console.log(ar1);
console.log(ar1.length);
ar1[4]="vina";
console.log(ar1);
/* add from first */
let l=ar1.unshift(78,90,99);
console.log(ar1);
console.log(l);
/*removing elements */
let popped=ar1.pop();
console.log("Element popped:"+popped);
console.log(ar1);

/** remve element from start */
popped=ar1.shift();
console.log("Element popped:"+popped);
console.log(ar1);

let deleted=ar1.splice(1,1);
console.log("Element deleted:"+deleted);
console.log(ar1);

deleted=ar1.splice(1,2);
console.log("Element deleted:"+deleted);
console.log(ar1);

deleted=ar1.splice(1,2);
console.log("Element deleted:"+deleted);
console.log(ar1);

ar1.splice(1,2,'poonam','harish',45000);
console.log(ar1);

/** join, includes, reverse*/

let ar2=[34,56,12,67,89,45,34,23];
let ar3=["harish", "hari","poonam", "kumar","pritam","pooja"];
console.log("________________________________");

let ar4=new Array();
console.log(ar4.length);

let ar5=new Array(3);
console.log(ar5.length);
console.log(ar5);
ar5.push(67); // 67 : 3rd index
console.log(ar5);
ar5[0]=78;
console.log(ar5);

let ar6=new Array(3,6); //  3 : value
console.log(ar6.length);
console.log(ar6);

let ar7=new Array(2, "mumbai","solapur",'pune');

let ar8=new Array("india is my country");


let employees= ["harish", "hari","poonam", "kumar","pritam","pooja"];
for(let i=0;i<=employees.length-1;i++){
    console.log(employees[i]);
}
/* please go reverse to display */
//short hand : 0, end , 1 increment, no reverse

console.log("--------for of--------");
for(let ele of employees){
    console.log(ele);
}
console.log("--------forEach function--------");

let display=e=>console.log(e);
employees.forEach(display);
console.log("--------forEach function--------");
employees.forEach(empName=>console.log(empName))