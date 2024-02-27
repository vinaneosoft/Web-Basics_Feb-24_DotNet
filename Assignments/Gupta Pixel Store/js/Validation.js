const node1 = document.getElementById('name');
const node2 = document.getElementById('age');
const node3 = document.getElementById('Phone');
const node4 = document.getElementById('email');
const node5 = document.getElementById('pass');
const node6 = document.getElementById('cpass');

const eerorNode1 = document.getElementById('error1');
const eerorNode2 = document.getElementById('error2');
const eerorNode3 = document.getElementById('error3');
const eerorNode4 = document.getElementById('error4');
const eerorNode5 = document.getElementById('error5');
const eerorNode6 = document.getElementById('error6');

const mobilePattrn = new RegExp("^[0-9]{10}$");

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


function validation1() {
    eerorNode1.textContent="";
    if (node1.value == "") {
        eerorNode1.textContent="name is required *!.."
        return false;
    }else if(node1.value.length < 2){
        eerorNode1.textContent="name is required more than 2 words *.."
        return false;
    }
    else{
        return true;
    }
}
function validation2() {
    eerorNode2.textContent="";
    if (node2.value == "") {
        eerorNode2.textContent="Age is required*..";
        return false ;
    }
    else if(node2.value < 18 || NamedNodeMap.value >60){
        eerorNode2.textContent="Only 18 to 60 age is allowed*..";
        return false;
    }
    else{
        return true;
    }
}
function validation3() {
    eerorNode3.textContent="";
    if (node3.value =="") {
        eerorNode3.textContent="Phone Number is required*..";
        return false;
    }
    else if(mobilePattrn.test(node3.value) == false){
        eerorNode3.textContent="Pls Enter Valide Phone Number*...";
        return false;
    }
    else{
        return true;
    }
    
}
function validation4() {
    eerorNode4.textContent="";
    if (node4.value == "") {
        eerorNode4.textContent="email is required *...";
        return false;
    }else if(!node4.value.includes("@")||node4.value.includes(' ') || node4.value.endsWith('@')||node4.value.startsWith('@')){
        eerorNode4.textContent=" Enter a Valid email id  *...";
        return false;
    }else{
        return true;
    }
    
}
function validation5() {
    eerorNode5.textContent="";
    if (node5.value == "") {
        eerorNode5.textContent="pls Enter Password *...";
        return false;
    }else if(passwordPattern.test(node5.value) ==false){
        eerorNode5.append(spanNode1,oList,spanNode2);
        return false;
    }
    else{
        return true;
    }
}

function validation6() {
    eerorNode6.textContent= "";
    if(node6.value == "") {
        eerorNode6.textContent="Confirm Your Password *...";
        return false;
    }else if(node5.value !=node6.value){
        eerorNode6.textContent="Password is not Matching *...";
        return false;
    }else{
        return true;
    }
}
function validationAll() {
   const r1 = validation1();
   const r2 = validation2();
   const r3 = validation3();
   const r4 = validation4();
   const r5 = validation5();
   const r6 = validation6();
   return(r1 && r2 && r3 && r4 && r5 && r6)


}