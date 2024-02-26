const nameNode=$('#name');
const ageNode=$('#age');
const mobileNode=$('#mobile');
const emailNode=$('#emailid');
const passNode=$('#pass');
const confirmpassNode=$('#cpass');
const errorNode1=$("#error1")
const errorNode2=$("#error2")
const errorNode3=$("#error3")
const errorNode4=$("#error4")
const errorNode5=$("#error5")
const errorNode6=$("#error6")

nameNode.blur(()=>validate1());
ageNode.blur(()=>validate2());
mobileNode.keyup(()=>validate3());
emailNode.blur(()=>validate4());
passNode.blur(()=>validate5());
confirmpassNode.blur(()=>validate6());



const mobilePattern=new RegExp("^[0-9]{10}$");
const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");

const uList=$("<ul>");
const errors=['small letter', 'capital letter','digit','special symbol'];
for(let error of errors){
    const liNode=$('<li>');
    liNode.text(error);
    uList.append(liNode);
}
const spanNode1=$('<span>');
spanNode1.text("Password must contain atleast one");
const spanNode2=$('<span>');
spanNode2.text("Password must be 6 to 12 characters long");

//"password must contain atleast one small letter, capital letter..............."

function validate1(){
  errorNode1.text("");
  if(nameNode.val()==""){
    errorNode1.text("Name is required");
    return false;
    }
  else if(nameNode.val().length<2){
    errorNode1.text("Please enter full name");
    return false;
  }
  else{
        return true;
    }
}

function validate2(){
  errorNode2.text("");
  if(ageNode.val()==""){
    errorNode2.text("Age is required");
    return false;
  }
  else if(ageNode.val()<18 || ageNode.val()>60){
   errorNode2.text("only 18 to 60 age candidates allowed");
   return false;
  }
  else{
    return true;
    }
}
function validate3(){
    errorNode3.text("");
    if(mobileNode.val()==""){
        errorNode3.text("Mobile number is required");
        return false;
    }
    else if(mobilePattern.test(mobileNode.val())==false){
        errorNode3.text("Please enter valid mobile number");
        return false;
    }
    else{
        return true;
        }
}
function validate4(){
    errorNode4.text("");
    if(emailNode.val()==""){
        errorNode4.text("Email id is required");
        return false;
    }
    else if(!emailNode.val().includes("@")|| emailNode.val().includes(" ") || emailNode.val().endsWith('@') || emailNode.val().startsWith('@'))
       {
        errorNode4.text("Please enter valid email id");
        return false;
       }
    else{
        return true;
        }
}
function validate5(){
    errorNode5.text("");
    if(passNode.val()==""){
        errorNode5.text("Password is required");
        return false;
    }
    else if(passwordPattern.test(passNode.val())==false){
        errorNode5.append(spanNode1,uList,spanNode2); // access div and append
        return false;
    }
    else{
        return true;
        }
}
function validate6(){
    errorNode6.text("");
    if(confirmpassNode.val()==""){
     errorNode6.text("Confirm password is required");
     return false;
    }
    else if(confirmpassNode.val()!=passNode.val()){
     errorNode6.text("Passwords must match");
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
    const r6=validate6();
    return (r1&&r2&&r3&&r4&&r5&&r6);
}