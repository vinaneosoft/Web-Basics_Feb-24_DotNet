const nameNode=document.getElementById('name');
const emailNode=document.getElementById('email');
const mobileNode=document.getElementById('mobile');
const passNode=document.getElementById('password');
const confirmpassNode=document.getElementById('confirmPassword');

const errorNode1=document.getElementById("error1")
const errorNode2=document.getElementById("error2")
const errorNode3=document.getElementById("error3")
const errorNode4=document.getElementById("error4")
const errorNode5=document.getElementById("error5")

function validate1(){
  errorNode1.textContent="";
  if(nameNode.value==""){
    errorNode1.textContent="Name is required";
    return false;
    }
  else if(nameNode.value.length<2){
    errorNode1.textContent="Please enter full name";
    return false;
  }
  else{
    errorNode1.textContent="";
        return true;
    }
}


function validate2(){
    errorNode2.textContent="";
    if(emailNode.value==""){
        errorNode2.textContent="Email id is required";
        return false;
    }
    else if(!emailNode.value.includes("@")|| emailNode.value.includes(" ") || emailNode.value.endsWith('@') || emailNode.value.startsWith('@'))
       {
        errorNode2.textContent="Please enter valid email id";
        return false;
       }
    else{
        return true;
        }
}

const mobilePattern=new RegExp("^[0-9]{10}$");
function validate3(){
    errorNode3.textContent="";
    if(mobileNode.value==""){
        errorNode3.textContent="Mobile number is required";
        return false;
    }
    else if(mobilePattern.test(mobileNode.value)==false){
        errorNode3.textContent="Please enter valid mobile number";
        return false;
    }
    else{
        return true;
        }
}

const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");

const uList=document.createElement("ul");
const errors=['Atleast 1 small letter', 'Atleast 1 capital letter','Atleast 1 digit','Atleast 1 special symbol'];
for(let error of errors){
    const liNode=document.createElement('li');
    liNode.textContent=error;
    uList.append(liNode);
}
const spanNode1=document.createElement('span');
spanNode1.textContent="Password must contain";
const spanNode2=document.createElement('span');
spanNode2.textContent="Password must be 6 to 12 characters long";

function validate4(){
    errorNode4.textContent="";
    if(passNode.value==""){
        errorNode4.textContent="Password is required";
        return false;
    }
    else if(passwordPattern.test(passNode.value)==false){
        errorNode4.append(spanNode1,uList,spanNode2); // access div and append
        return false;
    }
    else{
        return true;
        }
}
function validate5(){
    errorNode5.textContent="";
    if(confirmpassNode.value==""){
     errorNode5.textContent="Confirm password is required";
     return false;
    }
    else if(confirmpassNode.value!=passNode.value){
     errorNode5.textContent="Passwords must match";
     return false;
    }
    else{
        return true;
    }
}

function validateAll(){
    const r1=validate1();
    const r2=validate2();
    const r3=validate3();
    const r4=validate4();
    const r5=validate5();
    return (r1&&r2&&r3&&r4&&r5);
}



