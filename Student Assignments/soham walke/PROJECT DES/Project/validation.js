const nameNode=document.getElementById("name")
const ageNode=document.getElementById("age")
const mobNode=document.getElementById("number")
const emailNode=document.getElementById("email")
const passNode=document.getElementById("password")
const cpassNode=document.getElementById("cpassword")


const error1Node=document.getElementById("error1")
const error2Node=document.getElementById("error2")
const error3Node=document.getElementById("error3")
const error4Node=document.getElementById("error4")
const error5Node=document.getElementById("error5")
const error6Node=document.getElementById("error6")

const mobilepattern=new RegExp("^[0-9]{10}$");
const passwordPattern= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");

const oList=document.createElement('ol')
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
    if(nameNode.value==''){
    error1Node.textContent='name is required'
    return false;
}
  else if(nameNode.value.length<3){
  error1Node.textContent='name is not valid'
  return false;
}
  else{
    return true;
}


}

function validate2(){
    if(ageNode.value==''){
    error2Node.textContent='age is required'
    return false;
}
   else if(ageNode.value<18 ||ageNode.value>60){
   error2Node.textContent='age is not valid'
   return false;
}
   else{
    return true;
}

}

function validate3(){
    if(mobNode.value==''){
    error3Node.textContent='mobile number is required'
    return false;
}
    else if(mobilepattern.test(mobNode.value)==false){
        error3Node.textContent='mobile number is not valid'
        return false;    
    }
    else{
        return true;
    }
 
}

function validate4(){
    if( emailNode.value==''){
    error4Node.textContent='email is required'
    return false;}
 else if(!emailNode.value.includes("@")|| emailNode.value.includes(" ") || emailNode.value.endsWith('@') || emailNode.value.startsWith("@") )
 {
    error4Node.textContent='email is not valid'
  return false;
} 
 else{
    return true;
}
}

function validate5(){
    if(passNode.value==''){
    error5Node.textContent='password is required'
    return false;}
 else if(passwordPattern.test(passNode.value)==false){
    error5Node.append(spanNode1,oList,spanNode2)
    return false;}
    else{
        return true;
    }
}

function validate6(){
    if(cpassNode.value==''){
    error6Node.textContent='conform pasword is required'
    return false;}
else if(cpassNode.value!=passNode.value){
error6Node.textContent+='passawod not match'
return false;}
else{
    return true;
}

}

function validateall(){
        const r1=validate1();
        const r2=validate2();
        const r3=validate3();
        const r4=validate4();
        const r5=validate5();
        const r6=validate6();

        return (r1&&r2&&r3&&r4&&r5&&r6)
            
        
        // else {return false;}

    }   