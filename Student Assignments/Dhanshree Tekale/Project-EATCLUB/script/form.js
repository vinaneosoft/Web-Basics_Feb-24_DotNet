document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const username = document.getElementById("user");
    const password = document.getElementById("pass");

    form.addEventListener("submit", function(event) {
        let isValid = true;

        if (username.value.trim() === "") {
            alert("Please enter a username.");
            isValid = false;
        }

        if (password.value.trim() === "") {
            alert("Please enter a password.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});