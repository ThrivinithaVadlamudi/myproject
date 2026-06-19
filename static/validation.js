let myusername = document.getElementById("username");
let mypassword = document.getElementById("password");
let myemail = document.getElementById("email");
let mylocation = document.getElementById("location");

let usernameError = document.getElementById("username-error");
let passwordError = document.getElementById("password-error");
let emailError = document.getElementById("email-error");
let locationError = document.getElementById("location-error");

myusername.addEventListener("blur", function () {
    if (myusername.value.trim() === "" ) {
        usernameError.textContent = "Username is required*";
    } 
    else {
        usernameError.textContent = "";
    }
});

mypassword.addEventListener("blur", function () {
    if (mypassword.value.trim() === "" || mypassword.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long*";
    } 
    else {
        passwordError.textContent = "";
    }
});

myemail.addEventListener("blur", function () {
    if (myemail.value.trim() === "" || !myemail.value.includes("@")) {
        emailError.textContent = "Please enter a valid email address*";
    } else {
        emailError.textContent = "";
    }
});

mylocation.addEventListener("blur", function () {
    if (mylocation.value.trim() === "") {
        locationError.textContent = "Location is required*";
    } else {
        locationError.textContent = "";
    }
});
let myloginmail = document.getElementById("logemail");
let loginEmailError = document.getElementById("loginemail-error");

if (myloginmail) {
    myloginmail.addEventListener("blur", function () {
        if (myloginmail.value.trim() === "") {
            loginEmailError.textContent = "Email is required*";
        }
        else if (!myloginmail.value.includes("@")) {
            loginEmailError.textContent = "Enter a valid email id*";
        }
        else {
            loginEmailError.textContent = "";
        }
    });
}
let myloginpassword = document.getElementById("logpassword");
let loginPasswordError = document.getElementById("loginpassword-error");

if (myloginpassword) {
    myloginpassword.addEventListener("blur", function () {
        if (myloginpassword.value.trim() === "") {
            loginPasswordError.textContent = "Password is required*";
        }
        else if (myloginpassword.value.length < 6) {
            loginPasswordError.textContent = "Password must contain at least 6 characters*";
        }
        else {
            loginPasswordError.textContent = "";
        }
    });
}
