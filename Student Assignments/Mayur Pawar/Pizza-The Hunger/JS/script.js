const nameNode=document.getElementById('name');
const ageNode=document.getElementById('age');
const MobileNode=document.getElementById('mobile');
const emailNode=document.getElementById('emailid');
const passNode=document.getElementById('pass');
const confirmpassNode=document.getElementById('cpass');

const errornode1=document.getElementById('error1')
const errornode2=document.getElementById('error2')

const errornode3=document.getElementById('error3')
const errornode4=document.getElementById('error4')
const errornode5=document.getElementById('error5')
const errornode6=document.getElementById('error6')

const mobilePattern= new RegExp("^[0-9]{10}$");
const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
const oList = document.createElement('ol');
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
    errornode1.textContent='';
    if(nameNode.value==''){
    errornode1.textContent='Name is required';
    return false;
}
else if(nameNode.value.length<2){
errornode1.textContent="Enter Full name";
return false;
}
else{
    return true;
}
    
}
function validate2(){
    errornode2.textContent='';
    if(ageNode.value==''){
    errornode2.textContent='Age is required';
    return false;
}
    else if(ageNode.value<18 || ageNode.value>60){
    errornode2.textContent="Age should be within 18-60"
    return false;
}
else{
    return true;
}

}
function validate3(){
    errornode3.textContent='';
    if(MobileNode.value==''){

    errornode3.textContent='Mobile No is required';
    return false;
            
}
    else if(mobilePattern.test(MobileNode.value)==false){
    errornode3.textContent="Mobile Number is not valid";
    return false;
    }
    else{
        return true;
    }
}
function validate4(){
    errornode4.textContent='';
    if(emailNode.value=='')
    {
        
  
    errornode4.textContent='Email is required';
    return false;
}
    else if(!emailNode.value.includes('@') || emailNode.value.includes(' ') || emailNode.value.endsWith("@") || emailNode.value.startsWith("@"))
    {
    errornode4.textContent="Email is invalid";
    return false;
}
else{
    return true;
}
}
function validate5(){
    errornode5.textContent='';
    if(passNode.value=='')
    {
    errornode5.textContent='Password is required';
    return false;
    }
    else if(passwordPattern.test(passNode.value)==false)
    {
    errornode5.append(spanNode1,oList,spanNode2);
    return false;
    }
    else{
        return true;
    }

}
function validate6(){
    errornode6.textContent='';
    if(confirmpassNode.value=='')
    {
    errornode6.textContent='Confirm The password is required';
    return false;
    }
    else if(confirmpassNode.value != passNode.value){

    
    errornode6.textContent="Password is not Same";
    return false;
}
else{
    return true;
}
}
function validateAll(){
    const r1= validate1();
    const r2= validate2();
    const r3= validate3();

    const r4= validate4();

    const r5= validate5();

    const r6= validate6();

    return(r1 &&r2 &&r3 &&r4 &&r5 &&r6 );
    
}



