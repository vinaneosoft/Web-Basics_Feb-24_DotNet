function validateForm() {

    var email = document.getElementById("email").value;
    
    var password = document.getElementById("password").value;

    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   
    if (email == "") {
      alert("Email field must be filled out");
      return false;
    }
    
    else if(!email.match(emailRegex)) {
      alert("Please enter a valid email address");
      return false;
    }
   
    else if(password == "") {
      alert("Password field must be filled out");
      return false;
    }
    else{
    
    return true;
    }
  }