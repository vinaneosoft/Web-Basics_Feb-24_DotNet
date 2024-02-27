// function validateAll(event){
//     event.preventDefault();
// const name = document.getElementById('name');
// const email = document.getElementById('email');
// const message = document.getElementById('message');

// if(name.value.trim()==='' || email.value.trim()===''||message.value.trim()===''){
//     alert("Please fill out all the fields");
//     return false;
// }  
// else if(email.value.includes('@')|| email.value.includes(' ') || email.value.endsWith('@')||email.value.startsWith('@')){
//     alert('Please enter a valid email address');
//     return false;
// }
// else{
//     document.getElementById('contactForm').submit()
//     alert("Your form is submitted");
//     return true;
//     // console.log("submitted");
// }

// }

const name=document.getElementById('name');


const email=document.getElementById('email');
const message=document.getElementById('message');

const error1=document.getElementById("error1")
const error2=document.getElementById("error2")
const error3=document.getElementById("error3")





function validate1(){
  error1.textContent="";
  if(name.value==""){
    error1.textContent="Name is required";
    return false;
    }
  else if(name.value.length<3){
    node.textContent="Please enter full name";
    return false;
  }
  else{
        return true;
    }
}



function validate2(){
    error2.textContent="";
    if(email.value==""){
        error2.textContent="Email id is required";
        return false;
    }
    else if(!email.value.includes("@")|| email.value.includes(" ") || email.value.endsWith('@') || email.value.startsWith('@'))
       {
        error2.textContent="Please enter valid email id";
        return false;
       }
    else{
        return true;
        }
}
function validate3(){
    error3.textContent="";
    if(message.value==""){
     error3.textContent="Please enter your message";
     return false;
    }
    else if(message.value==" ")
    {
        error3.textContent="Please specify your reason";
        return false;
    }
    else{
        return true;
    }
    
}
function validateAll(){
    const v1=validate1();
    const v2=validate2();
    const v3=validate3();
    return (v1&&v2&&v3);
   
}