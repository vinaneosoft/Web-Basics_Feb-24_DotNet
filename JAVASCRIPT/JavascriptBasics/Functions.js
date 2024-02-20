// basic functions : named functions
// annonymous functions : without name
// arrow functions : compact declaration

// non-parameter, parameter functions
demo1();
function demo1() {
    // function body code
    console.log("in basic function.....");
}
demo1();

function  add(num1,num2){
    let res=num1+num2;
    return res;
}
let addition1=add(45,67);
console.log(addition1);
console.log(    add(450,679)      );
