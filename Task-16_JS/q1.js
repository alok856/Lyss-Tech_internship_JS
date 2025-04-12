function showFormData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
  
    const result = `
      Name: ${name} <br>
      Age: ${age} <br>
      Email: ${email}
    `;
  
    document.getElementById("formOutput").innerHTML = result;
  }
  