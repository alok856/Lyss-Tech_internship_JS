function filterNegative(arr) {
    return arr.filter(num => num >= 0);
  }
  
  const numbers = [1, -3, 5, -9, 7, 0];
  document.getElementById("q1").innerText = "Original: " + numbers + "\nFiltered: " + filterNegative(numbers);  