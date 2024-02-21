
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