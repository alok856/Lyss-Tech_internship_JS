document.getElementById("submitBtn").addEventListener("click", function() {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (password.length < 8) {
        message.textContent = "❌ Password must be at least 8 characters long.";
        message.style.color = "red";
    } else {
        message.textContent = "✅ Password is valid!";
        message.style.color = "green";
    }
});