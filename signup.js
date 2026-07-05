const form = document.getElementById("signupForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if(password !== confirm){

        alert("Passwords do not match.");

        return;

    }

    localStorage.setItem("username",name);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);

    alert("Account created successfully!");

    window.location.href="login.html";

});