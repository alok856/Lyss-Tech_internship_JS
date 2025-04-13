function runQ1() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output
  
    try {
      console.log(x); // x is not declared
    } catch (error) {
      output.innerHTML = `Q1 Error: ${error.message}`;
    }
  }