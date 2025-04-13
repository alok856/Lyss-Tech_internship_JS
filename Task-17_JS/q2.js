function runQ2() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output
  
    function divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero!");
      }
      return a / b;
    }
  
    try {
      const result = divide(10, 0);
      output.innerHTML = `Q2 Result: ${result}`;
    } catch (error) {
      output.innerHTML = `Q2 Error: ${error.message}`;
    }
  }