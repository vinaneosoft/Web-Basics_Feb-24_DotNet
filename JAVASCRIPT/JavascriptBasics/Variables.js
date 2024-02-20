/*
// dynamically typed lang: javascript
// var v1, let v2,, const v3
// v1=34; v="Hello"; v=true  : allowed
// data type is decided at run time number, string,boolean
*/


/*
//statically typed lang : java, c, c++
//int v  : v will accept only values compatible with int datatype
// v=45 okay v="Hello" : error
// type of variable is decided in prior b4 execution
*/

var companyName;
console.log(typeof companyName);
companyName="Neosoft";
console.log(typeof companyName);
companyName=8900099;
console.log(typeof companyName);
companyName=true;
console.log(typeof companyName);

let locationStatus;
locationStatus=0;
console.log(typeof locationStatus);
locationStatus="YES";
console.log(typeof locationStatus);
locationStatus=true
console.log(typeof locationStatus);
// var type variable declared inside function always has functional scope
function demo1(){
    console.log("outside"+i);
    for(var i=1;i<=5;i++){
        console.log("inside: "+i);
    }
    console.log("outside"+i);
}

demo1();

 /*let type variables have block scope where they are declared */
function demo2(){
    //console.log("outside"+i); // error
    for(let i=1;i<=5;i++){
        console.log("inside: "+i);
    }
    console.log("outside"+i); // error
}

console.log("DEMO2 called.......");
demo2();

/** var type variables can be redeclared in same scope */
var employeeId=4878;
var employeeId=8888;
console.log(employeeId);

/** let type variables can not be redeclared in same scope */
let empName="Pooja";
//let empName="Hari";

