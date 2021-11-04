function validateLogin()
{
    let errorDiv = document.getElementById("error");
    let email = document.forms["login"]["email"].value;
    let password = document.forms["login"]["password"].value;

    errorDiv.innerHTML = "";

    if(email == "" && password == "")
    {
        errorDiv.innerHTML = "You must fill your email and password";
        return false;
    }
    else if (email == "")
    {
        errorDiv.innerHTML = "Please fill your email!";
        return false;
    }
    else if (password == "")
    {
        errorDiv.innerHTML = "Please fill your password";
        return false;
    }
    else
    {
        alert("Validation successful");
        return true;
    }
}

function validateRegister() {
    let errorDiv = document.getElementById("error");
    let name = document.forms["register"]["name"].value;
    let email = document.forms["register"]["email"].value;
    let gender = document.forms["register"]["gender"].value;
    let city = document.forms["register"]["city"].value;
    let password = document.forms["register"]["password"].value;
    let conf = document.forms["register"]["conf"].value;

    errorDiv.innerHTML = "";

    if(name == "") {
        errorDiv.innerHTML = "Fill your name";
        return false;
    }
    else if(email == "") {
        errorDiv.innerHTML = "Fill your email";
        return false;
    }
    else if(gender == "") {
        errorDiv.innerHTML = "Fill your gender";
        return false;
    }
    else if(city == "") {
        errorDiv.innerHTML = "Fill your city";
        return false;
    }
    else if(password == "") {
        errorDiv.innerHTML = "Fill your password";
        return false;
    }
    else {
        var check = false;
        check = password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password);
        
        if(!check) {
            errorDiv.innerHTML = "Your password need at least 8 characters with a number and a capital letter";
            return false;
        }

        if(password != conf) {
            errorDiv.innerHTML = "Those passwords didn’t match. Try again.";
            return false;
        } else {
            alert("Validation successful");
            return true;
        }
    }
}