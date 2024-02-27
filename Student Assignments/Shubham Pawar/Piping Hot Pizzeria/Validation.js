const fnameNode = document.getElementById('fname');
const ageNode= document.getElementById('age');
const mobnoNode= document.getElementById('mobno');
const emailNode= document.getElementById('email');
const passwordNode= document.getElementById('pass');
const conPasswordNode= document.getElementById('cpass');

const errorNode1 = document.getElementById('error1');
const errorNode2 = document.getElementById('error2');
const errorNode3 = document.getElementById('error3');
const errorNode4 = document.getElementById('error4');
const errorNode5 = document.getElementById('error5');
const errorNode6 = document.getElementById('error6');

const mobPattern = new RegExp("^[0-9]{10}$");
const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");

const oList=document.createElement("ol");
const errors=['small letter', 'capital letter','digit','special symbol'];
for(let error of errors){
    const liNode=document.createElement('li');
    liNode.textContent=error;
    oList.append(liNode);
}
const spanNode1=document.createElement('span');
spanNode1.textContent="Password must contain atleast";
const spanNode2=document.createElement('span');
spanNode2.textContent="Password must be 6 to 12 characters long";

function validate1(){
    errorNode1.textContent="";
    if(fnameNode.value==""){
    errorNode1.textContent="Name is Required";
        return false;
    }
    else if(fnameNode.value.length<2){
    errorNode1.textContent="Full Name is Required";
    return false;
    }
    else{
        return true;
    }
}

// function validate2(){
//     errorNode2.textContent="";
//     if(ageNode.value==""){
//     errorNode2.textContent="Age is Required";
//     return false;
//     }
//     else if(ageNode.value<18 || ageNode.value>60){
//     errorNode2.textContent="Age is not valid!"
//     return false;
//     }
//     else{
//         return true;
//     }
// }

function validate3(){
    errorNode3.textContent="";
    if(mobnoNode.value==""){
    errorNode3.textContent="Mobile Number is Required";
    return false;
    }
    else if(mobPattern.test(mobnoNode.value)==false){
    errorNode3.textContent="Please enter valid mob no"
    return false;
    }
    else{
        return true;
    }
}

function validate4(){
    const eid=emailNode.value;
    errorNode4.textContent="";
    if(eid==""){
    errorNode4.textContent="Email is Required";
    return false;
    }
    else if(!eid.includes("@")|| eid.includes(" ") || eid.endsWith('@') || eid.startsWith('@')){
    errorNode4.textContent="Please enter valid email id";
        return false;
    }
    else{
        return true;
    }
}

function validate5(){
    errorNode5.textContent="";
    if(passwordNode.value==""){
    errorNode5.textContent="Password is Required"; 
    return false;
    }
    else if(passwordPattern.test(passwordNode.value)==false){
    // errorNode5.textContent="Please enter valid Password"
    errorNode5.append(spanNode1,oList,spanNode2);
    return false;
    }
    else{
        return true;
    }
}

function validate6(){
    errorNode6.textContent="";
    if(conPasswordNode.value==""){
    errorNode6.textContent="Confirm Password is Required"; 
    return false;
    }
    else if(passwordNode.value != conPasswordNode.value){
    errorNode6.textContent=" Password not matched"; 
    return false;
    }
    else{
        return true;
    }
}

function validateall(){
    const r1 = validate1();
    const r2 = validate2();
    const r3 = validate3();
    const r4 = validate4();
    const r5 = validate5();
    const r6 = validate6();
    return( r1 && r2 && r3 && r4 && r5 && r6);
}

// Login Page Validation

const loginEmailNode = document.getElementById('logemail');
const logiPassNode= document.getElementById('logpass');

const errorNode11 = document.getElementById('error11');
const errorNode22 = document.getElementById('error22');

function validate11(){
    const eid1=loginEmailNode.value;
    errorNode11.textContent="";
    if(eid1==""){
    errorNode11.textContent="Email is Required";
    return false;
    }
    else{
        return true;
    }
}

function validate22(){
    errorNode22.textContent="";
    if(logiPassNode.value==""){
    errorNode22.textContent="Password is Required"; 
    return false;
    }
    else{
        return true;
    }
}

function validatealll(){
    const r11 = validate11();
    const r22 = validate22();
    return( r11 && r22);
}
