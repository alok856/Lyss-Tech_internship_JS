let arr3 = ["apple", "banana", "cherry"];
let removed = arr3.shift(); // removes first

document.getElementById("q3").innerText =
  "Original First Element: " + removed + 
  "\nRemaining Array: " + arr3.join(", ");