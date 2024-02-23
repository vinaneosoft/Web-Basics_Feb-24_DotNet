const nameNode=document.getElementById('name');
const ageNode=document.getElementById('age');
const mobileNode=document.getElementById('mobile');
const emailNode=document.getElementById('emailid');
const passNode=document.getElementById('pass');
const confirmpassNode=document.getElementById('cpass');

const errorNode1=document.getElementById("error1")
const errorNode2=document.getElementById("error2")
const errorNode3=document.getElementById("error3")
const errorNode4=document.getElementById("error4")
const errorNode5=document.getElementById("error5")
const errorNode6=document.getElementById("error6")

const mobilePattern=new RegExp("^[0-9]{10}$");

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
  if(nameNode.value=="")
    errorNode1.textContent="Name is required";
  else if(nameNode.value.length<2)
    errorNode1.textContent="Please enter full name";
}

function validate2(){
  errorNode2.textContent="";
  if(ageNode.value=="")
    errorNode2.textContent="Age is required";
  else if(ageNode.value<18 || ageNode.value>60)
   errorNode2.textContent="only 18 to 60 age candidates allowed";
    // put require validation
}
function validate3(){
    errorNode3.textContent="";
    if(mobileNode.value=="")
        errorNode3.textContent="Mobile number is required";
    else if(mobilePattern.test(mobileNode.value)==false){
        errorNode3.textContent="Please enter valid mobile number";
    }
}
function validate4(){
    errorNode4.textContent="";
    if(emailNode.value=="")
        errorNode4.textContent="Email id is required";
    else if(!emailNode.value.includes("@")|| emailNode.value.includes(" ") || emailNode.value.endsWith('@') || emailNode.value.startsWith('@'))
        errorNode4.textContent="Please enter valid email id";
}
function validate5(){
    errorNode5.textContent="";
    if(passNode.value=="")
        errorNode5.textContent="Password is required";
    else if(passwordPattern.test(passNode.value)==false)
        errorNode5.append(spanNode1,oList,spanNode2);
}
function validate6(){
    errorNode6.textContent="";
    if(confirmpassNode.value=="")
    errorNode6.textContent="Confirm password is required";
}

function validateAll(){
    
}