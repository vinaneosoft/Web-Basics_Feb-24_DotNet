
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


let employees= ["harish", "hari  ","  poonam   ", "  kumar","pritam","Pooja"];
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

console.log("--------------");
employees.forEach((empName,index,arrayref)=>console.log(empName+" "+index+" "+arrayref))
console.log("--------------");
let flag=false;
employees.forEach(
    (empName,index,emps)=>{
    emps[1]="Puja"; // changes being done in array
    if(flag==false){
        emps.push("Pallavi");
        emps.push("Soham");
        emps.push("Gargi");
        flag=true;
    }
    console.log(employees.length);
    console.log(empName+" "+index+" "+emps); 
    }
)
//forEach : u can do any changes in array : replacing the elements
/*but if we are adding extra elements then, 
array gets changed but iteration will stop to orignal length */
console.log("----- filter, map, reduce  function--------");
// filter : search values from array : returns new array having filtered values
console.log(employees);
// search employees starting with P/p
let filteredEmps=employees.filter(empName=>empName.trim().toLowerCase().startsWith('p'))
console.log(filteredEmps);

let mappedEmps=employees.map(empName=>"NEO-"+empName.trim());
console.log(mappedEmps);
/** declare salary array
 * 1. Iterate array using forEach
 * 2. filter salaries <10000 using filter
 * 3. increment every salary by 5000 using map
 */

let nums=[4,3,2,1,7];

let sum=nums.reduce((prev,current )=>prev+current)
console.log(sum);
/** initial values of
 * prev = 0 index ele = 4
 * current = 1 index ele = 3 prev=7, 
 * current = 2 prev = 9
 * current= 1 prev=10
 * current 7 prev=17
 */
let sum2=nums.reduce((prev,current )=>prev+current, 23);
console.log(sum2);
/** initial values of
 * prev = passed value= 23 
 * current = 0 index ele = 4 prev=27, 
 * current = 3 prev = 30
 * current= 2 prev=32
 * current 1 prev=33
 * current = 7 prev =40
 */