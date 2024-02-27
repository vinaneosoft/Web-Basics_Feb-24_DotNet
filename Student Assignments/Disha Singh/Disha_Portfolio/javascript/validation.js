const nameNode=document.getElementById('name');
const emailNode=document.getElementById('email');
const subjectnode=document.getElementById('subject');
const messagenode=document.getElementById('message');

const errorNode1=document.getElementById("error1")
const errorNode2=document.getElementById("error2")
const errorNode3=document.getElementById("error3")
const errorNode4=document.getElementById("error4")





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
function validate3(){
    errorNode3.textContent="";
    if(subject.value==""){
        errorNode3.textContent="Subject is required for communication";
        return false;

        
    }
     else if(subject.value==" ")
    {
        errorNode3.textContent="Please specify your reason";
        return false;
    }
    else{
        return true;
    }
    
}
function validate4(){
    errorNode4.textContent="";
    if(message.value==""){
     errorNode4.textContent="Please enter your message";
     return false;
    }
    else if(subject.value==" ")
    {
        errorNode4.textContent="Please specify your reason";
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
    
    return (r1&&r2&&r3&&r4);
}