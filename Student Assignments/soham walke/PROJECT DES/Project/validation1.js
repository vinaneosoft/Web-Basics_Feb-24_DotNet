const nameNode=document.getElementById("username")
const passNode=document.getElementById("password")


const error1Node=document.getElementById("error1")
const error5Node=document.getElementById("error5")

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

function validateall(){
    const r1=validate1();
    const r5=validate5();
    
    return (r1&&r5)
            
        
    // else {return false;}

}   