// basic functions : named functions



// non-parameter, parameter functions
demo1();
function demo1() {
    // function body code
    console.log("in basic function.....");
}
demo1();

function  add(num1,num2){
    let res=num1+num2;
    console.log(typeof num1);
    console.log(typeof num2);
    return res;
}
let addition1=add(45,67);
console.log(addition1);
console.log(    add(450,679)      );
console.log(    add("mahesh ","patil")      );

// annonymous functions : without name
let demo2=     function() {
    // function body code
    console.log("in annonymous function.....");
}
demo2();

let refdemo=demo2; // pass the ref to another variable
demo2=function(){
    console.log("in another annonymous function.....");
}
demo2();
refdemo();
// if we do not want to change the references then declare const ref
const demo3=function(){

}
const demo4=function(){

}


// arrow functions : compact declaration =>

const arrowfun1=()=>{
    console.log("hi");
    console.log("Hello");
    console.log("Welcome");
}

arrowfun1();

/** if only single statment in body, then {} are optional */
const arrowfun2=()=>console.log("hi");
arrowfun2();

/** if only single return statment in body,
 * then remove return keyword and {} 
 * body  automatically returns the result
 */
/** if arrow function have single argument then () optional */
const arrowfun3=num=>num*num*num;

let cube=arrowfun3(7);
console.log(cube);