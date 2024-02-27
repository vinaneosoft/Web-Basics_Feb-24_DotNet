const nameNode = document.getElementById('name');
const username = document.getElementById('username');
const mobileNode = document.getElementById('phone');
const passNode = document.getElementById('password');
const confirmpassNode = document.getElementById('confirm_password');

const errorNode1 = document.getElementById('error1');
const errorNode2 = document.getElementById('error2');
const errorNode3 = document.getElementById('error3');
const errorNode4 = document.getElementById('error4');
const errorNode5 = document.getElementById('error5');

const mobilePattern = new RegExp("^[0-9]{10}$");
const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;

function validate1() {
    errorNode1.textContent = '';
    if (nameNode.value === '') {
        errorNode1.textContent = ' Name is required';
        return false;
    } else if (nameNode.value.length < 2) {
        errorNode1.textContent = 'Please enter a valid  Name';
        return false;
    } else {
        return true;
    }
}

function validate2() {
    errorNode2.textContent = '';
    if (username.value === '') {
        errorNode2.textContent = 'Username is required';
        return false;
    } else if (username.value.length < 2) {
        errorNode2.textContent = 'Please enter a valid username';
        return false;
    } else {
        return true;
    }
}

function validate3() {
    errorNode3.textContent = "";
    if (mobileNode.value === "") {
        errorNode3.textContent = "Mobile number is required";
        return false;
    } else if (mobilePattern.test(mobileNode.value) === false) {
        errorNode3.textContent = "Please enter a valid mobile number";
        return false;
    } else {
        return true;
    }
}

function validate4() {
    errorNode4.textContent = '';
    if (passNode.value === '') {
        errorNode4.textContent = 'Password is required';
        return false;
    } else if (!passwordPattern.test(passNode.value)) {
        errorNode4.textContent = 'Password must meet the specified criteria';
        return false;
    } else {
        return true;
    }
}

function validate5() {
    errorNode5.textContent = "";
    if (confirmpassNode.value === "") {
        errorNode5.textContent = "Confirm password is required";
        return false;
    } else if (confirmpassNode.value !== passNode.value) {
        errorNode5.textContent = "Passwords must match";
        return false;
    } else {
        return true;
    }
}

function validateAll() {
    const r1 = validate1();
    const r2 = validate2();
    const r3 = validate3();
    const r4 = validate4();
    const r5 = validate5();

    return (r1 && r2 && r3 && r4 && r5);
}
