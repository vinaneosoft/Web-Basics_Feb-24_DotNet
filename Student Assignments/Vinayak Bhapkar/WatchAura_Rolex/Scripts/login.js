const email=document.getElementById("email");
const password=document.getElementById("password");

const errorNode1=document.getElementById('error1');
const errorNode2=document.getElementById('error2');

function validate1(){
    errorNode1.textContent="";
    if(email.value==""){
        errorNode1.textContent="Email id is required";
        return false;
    }
    else if(!email.value.includes("@")|| email.value.includes(" ") || email.value.endsWith('@') || email.value.startsWith('@'))
       {
        errorNode1.textContent="Please enter valid email id";
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

function validate2(){
    errorNode2.textContent="";
    if(password.value==""){
        errorNode2.textContent="Password is required";
        return false;
    }
    else if(passwordPattern.test(password.value)==false){
        errorNode2.append(spanNode1,uList,spanNode2); // access div and append
        return false;
    }
    else{
        return true;
        }
}

function validateAll(){
    let a=validate1();
    let b=validate2();
    return(a&&b);
}