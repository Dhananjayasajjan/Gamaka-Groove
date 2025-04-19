function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    alert("Login successful! Redirecting...");
    window.location.href = "index.html";
}

function register() {
    let newUsername = document.getElementById('new-username').value;
    let email = document.getElementById('email').value;
    let newPassword = document.getElementById('new-password').value;

    if (newUsername === "" || email === "" || newPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Registration successful! Redirecting to login...");
    window.location.href = "login.html";
}
