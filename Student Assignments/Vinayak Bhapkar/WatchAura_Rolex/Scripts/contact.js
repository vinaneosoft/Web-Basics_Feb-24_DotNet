const email=document.getElementById("email");
const name1=document.getElementById("name");
const text=document.getElementById("textc");

const span1=document.getElementById('span1');
const span2=document.getElementById('span2');
const span3=document.getElementById('span3');

function validate1(){
    span1.textContent="";
    if(name1.value==""){
      span1.textContent="Name is required";
      return false;
      }
    else if(name1.value.length<2){
      span1.textContent="Please enter full name";
      return false;
    }
    else{
      span1.textContent="";
          return true;
      }
  }
function validate2(){
    span2.textContent="";
    if(email.value==""){
        span2.textContent="Email id is required";
        return false;
    }
    else if(!email.value.includes("@")|| email.value.includes(" ") || email.value.endsWith('@') || email.value.startsWith('@'))
       {
        span2.textContent="Please enter valid email id";
        return false;
       }
    else{
        return true;
        }
}
function validate3(){
    span3.textContent="";
    if(text.value==""){
      span3.textContent="Message is required";
      return false;
      }
    
    else{
      span3.textContent="";
          return true;
      }
  }

function validateAll(){
    let a=validate1();
    let b=validate2();
    let c=validate3();
    return(a&&b&&c);
}