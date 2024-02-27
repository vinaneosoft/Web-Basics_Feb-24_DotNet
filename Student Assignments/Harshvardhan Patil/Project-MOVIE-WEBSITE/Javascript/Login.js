const nameNode = document.getElementById('username');
const passNode = document.getElementById('password');

const errorNode1 = document.getElementById('error1');
const errorNode2 = document.getElementById('error2');

const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$/;

function validate1() {
    errorNode1.textContent = '';
    if (nameNode.value === '') {
        errorNode1.textContent = 'Username is required';
        return false;
    } else if (nameNode.value.length < 2) {
        errorNode1.textContent = 'Please enter a valid username';
        return false;
    } else {
        return true;
    }
}

function validate2() {
    errorNode2.textContent = '';
    if (passNode.value === '') {
        errorNode2.textContent = 'Password is required';
        return false;
    } else if (!passwordPattern.test(passNode.value)) {
        errorNode2.textContent = 'Password must meet the specified criteria';
        return false;
    } else {
        return true;
    }
}

function validateAll() {
    const isValid1 = validate1();
    const isValid2 = validate2();
    return isValid1 && isValid2;
}
