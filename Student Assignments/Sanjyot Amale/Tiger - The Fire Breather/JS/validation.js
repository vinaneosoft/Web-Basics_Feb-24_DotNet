const fNameNode = document.getElementById('fName');
const lNameNode = document.getElementById('lName');
const emailNode = document.getElementById('email');

const errorNode1 = document.getElementById('firstNameError');
const errorNode2 = document.getElementById('lastNameError');
const errorNode3 = document.getElementById('emailError');


function validate1() {
errorNode1.textContent = "";
if (fNameNode.value == "") {
errorNode1.textContent = "Enter First  Name ";
return false;
}
else if (fNameNode.value.length < 2) {
errorNode1.textContent = "Enter Full Name"
return false;
}
else {
return true;
}

}

function validate2() {
errorNode2.textContent = "";
if (lNameNode.value == "") {
errorNode2.textContent = "Enter Last Name ";
return false;
}
else if (lNameNode.value.length < 2) {
errorNode2.textContent = "Enter Last Name"
return false;
}
else {
return true;
}

}

function validate3()
{ errorNode3.textContent="";
if(emailNode.value=="")
{
    errorNode3.textContent="Enter Email ID ";
    return false;
} 
else if(!emailNode.value.includes('@') || emailNode.value.endsWith('@') || emailNode.value.startsWith('@'))
{
    errorNode3.textContent="Enter Valid email ID";
    return false;
}
else
{   return true;
   
}
}

function validateAll()
{
const t1=validate1();
const t2=validate2();
const t3=validate3();

return(t1 && t2 && t3);
}