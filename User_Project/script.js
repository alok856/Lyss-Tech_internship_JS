function validateForm() {
    let pass = document.getElementById("pass").value;
    if (pass.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }
    return true;
}