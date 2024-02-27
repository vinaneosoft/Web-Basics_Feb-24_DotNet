const nameNode = document.getElementById('name');
const emailNode=document.getElementById('email');
const messageNode=document.getElementById('message');


const errorNode1 = document.getElementById('error1');
const errorNode2 = document.getElementById('error2');
const errorNode3=document.getElementById("error3")
 

function validate1() {
    errorNode1.textContent = '';
    if (nameNode.value === '') {
        errorNode1.textContent = 'name is required';
        return false;
    } else if (nameNode.value.length < 2) {
        errorNode1.textContent = 'Please enter a valid name';
        return false;
    } else {
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

function validate3() {
    errorNode3.textContent = '';
    if ( messageNode.value === '') {
        errorNode3.textContent = ' Please enter Message is required';
        return false;
    }  
    else {
        return true;
    }
}
function validateAll(){
    const r1=validate1();
    const r2=validate2();
    const r3=validate3();
     
    return (r1 &&  r2 && r3 );
}
