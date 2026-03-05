const loginForm = document.querySelector(".login-form");
const login = document.querySelector(".login");
const submitButton = document.getElementById("submit");
const username = document.getElementById("name");
const password = document.getElementById("password");
const error = document.querySelector(".error");
const passwordOpen = document.querySelector(".fa-eye-slash");
const passwordClose = document.querySelector(".fa-eye");
submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
        error.textContent = "Enter Username and Password"
    }  else if (password.value.length < 8) {
        error.textContent = "Enter a stronger Password"
    } else {
        alert("Login Successful!!!")
    }

});

passwordOpen.addEventListener("click", function () {
   password.type = "text";
   passwordOpen.style.display = "none";
   passwordClose.style.display = "block";
});

passwordClose.addEventListener("click", function () {
   password.type = "password";
   passwordClose.style.display = "none";
   passwordOpen.style.display = "block";
});