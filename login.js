// ============================
// LOGIN
// ============================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {

        alert("Please fill in all fields.");

        return;
    }

    // حفظ بيانات المستخدم
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    alert("Welcome to Game Store 🎮");

    // الانتقال إلى الصفحة الرئيسية
    window.location.href = "index.html";

});