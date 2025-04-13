function runQ4() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output
  
    try {
      let result = 10 / 0;
      if (!isFinite(result)) {
        throw new Error("Divide by zero!");
      }
      output.innerHTML = `Q4 Result: ${result}`;
    } catch (error) {
      output.innerHTML = `Q4 Error: ${error.message}`;
    } finally {
      output.innerHTML += `<br>Finally block executed.`;
    }
  }