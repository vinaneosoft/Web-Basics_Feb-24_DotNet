
//Validation for login page
const emailNodeLogin = document.getElementById('login-email-validate')
const passNodeLogin = document.getElementById('login-pass-validate')

const errorNode1Login = document.getElementById('errorEmail')
const errorNode2Login = document.getElementById('errorPass')

const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");

function validate1Login(){
    errorNode1Login.textContent = ""
    if(emailNodeLogin.value==""){
        errorNode1Login.textContent = "Email is required"
        return false
    }
    else if(!emailNodeLogin.value.includes("@")|| emailNodeLogin.value.includes(" ") || emailNodeLogin.value.endsWith('@') || emailNodeLogin.value.startsWith('@')){
        errorNode1Login.textContent="Please enter valid email id";
        return false;
    }
    else{
        return true
    }
}

function validate2Login(){
    errorNode2Login.textContent = ""
    if(passNodeLogin.value==""){
        errorNode2Login.textContent = "Password is required"
        return false
    }
    else if(passwordPattern.test(passNodeLogin.value)==false){
        errorNode2Login.textContent="Password does not match given requirement"
        return false
    }
    else{
        return true
    }
}

function validateAllLogin(){    
    console.log("Ninga");
    const r1 = validate1Login()
    const r2 = validate2Login()
    if(r1&&r2){
        const login = document.getElementById('loginToBeOrNotToBe')
        login.style.display = "none";        
        return true
    }
    else{
        return false
    }    
}


//Validation for registration

const nameNode=document.getElementById('name');
const emailNode=document.getElementById('emailid');
const mobileNode=document.getElementById('mobile');
const passNode=document.getElementById('pass');
const confirmpassNode=document.getElementById('cpass');

const errorNode1=document.getElementById("error1")
const errorNode2=document.getElementById("error2")
const errorNode3=document.getElementById("error3")
const errorNode4=document.getElementById("error4")
const errorNode5=document.getElementById("error5")

const mobilePattern=new RegExp("^[0-9]{10}$");



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

function validate4(){
    console.log('ninga');
    errorNode4.textContent="";
    if(passNode.value==""){
        errorNode4.textContent="Password is required";
        return false;
    }
    else if(passwordPattern.test(passNode.value)==false){
        errorNode4.textContent="Password does not match given requirement";
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

