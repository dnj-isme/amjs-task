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