const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

form.addEventListener("submit", function(event) {
    let isValid = true;

    if (nameInput.value.trim() === "") {
        showError("name", "Name is required.");
        isValid = false;
    } else {
        hideError("name");
    }

    if (phoneInput.value.trim() === "") {
        showError("phone", "Phone Number is required.");
        isValid = false;
    } else {
        hideError("phone");
    }

    if (emailInput.value.trim() === "") {
        showError("email", "Email is required.");
        isValid = false;
    } else {
        hideError("email");
    }

    if (passwordInput.value.trim() === "") {
        showError("password", "Password is required.");
        isValid = false;
    } else {
        hideError("password");
    }

    if (confirmPasswordInput.value.trim() === "") {
        showError("confirmPassword", "Confirm Password is required.");
        isValid = false;
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        showError("confirmPassword", "Passwords do not match.");
        isValid = false;
    } else {
        hideError("confirmPassword");
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

function showError(inputId, errorMessage) {
    const errorSpan = document.getElementById(`${inputId}Error`);
    errorSpan.textContent = errorMessage;
}

function hideError(inputId) {
    const errorSpan = document.getElementById(`${inputId}Error`);
    errorSpan.textContent = "";
}

function resetForm() {
    form.reset();
    // You can add additional logic here if needed
}