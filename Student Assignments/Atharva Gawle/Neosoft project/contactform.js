function validate1() {
    var name = document.getElementById('name').value;
    var error1 = document.getElementById('error1');
    if (name.trim().length < 2) {
        error1.innerHTML = 'Name should be at least 2 characters.';
        error1.style.color = 'red';
    } else {
        error1.innerHTML = '';
    }
}

function validate3() {
    var mobile = document.getElementById('mobile').value;
    var error4 = document.getElementById('error4');
    // Allow only numeric characters in the mobile number
    if (!/^\d+$/.test(mobile) || mobile.trim().length !== 10) {
        error4.innerHTML = 'Valid 10-digit mobile number is required.';
        error4.style.color = 'red';
    } else {
        error4.innerHTML = '';
    }
}

function validate4() {
    var email = document.getElementById('emailid').value;
    var error3 = document.getElementById('error3');
    // You can add more sophisticated email validation if needed
    if (email.trim() === '' || !email.includes('@')) {
        error3.innerHTML = 'Valid email is required.';
        error3.style.color = 'red';
    } else {
        error3.innerHTML = '';
    }
}

function validateForm() {
    validate1();
    validate3();
    validate4();

    // Check if any validation fails
    var errors = document.querySelectorAll('.error');
    if (errors.length === 0) {
        // Reset the form if validation is successful
        document.getElementById('rform').reset(); // Replace 'myForm' with your actual form ID
    }

    // Return false if any validation fails
    return errors.length === 0;
}