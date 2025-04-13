function runQ3() {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear previous output
  
    function getElement(arr, index) {
      if (index < 0 || index >= arr.length) {
        throw new RangeError("Index out of bounds.");
      }
      return arr[index];
    }
  
    try {
      const arr = [5, 10, 15];
      const value = getElement(arr, 5);
      output.innerHTML = `Q3 Value: ${value}`;
    } catch (error) {
      output.innerHTML = `Q3 Error: ${error.message}`;
    }
  }