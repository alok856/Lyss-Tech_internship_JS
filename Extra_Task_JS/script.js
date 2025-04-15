document.getElementById("submitBtn").addEventListener("click", function () {
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");
  
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    if (strongPasswordRegex.test(password)) {
      message.textContent = "✅ Password is strong!";
      message.style.color = "green";
    } else {
      message.textContent =
        "❌ Use 8+ chars, include uppercase, lowercase, number & special character.";
      message.style.color = "red";
    }
  });  